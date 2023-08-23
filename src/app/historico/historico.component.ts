import { Component } from '@angular/core';
import { MentoriaModel } from "../models/mentorias-model";

import { MatTableDataSource } from "@angular/material/table";
import { MentoriasService } from "../services/mentorias.service";

import { FormBuilder } from '@angular/forms';
import { UserService } from "src/app/services/user.service";

import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ["mentor", "mentorado", "duracao", "formato", "recompensa", "status", "avaliar"];
  userType: string = 'Mentor';
  userRatings: number[] = [];

  constructor(private mentoriaService: MentoriasService, private formBuilder: FormBuilder, public user: UserService,
    private snackBar: MatSnackBar, private router: Router) {
    this.mentoriaService.getMentorias(user).subscribe((mentorias) => {
      let filteredMentorias = MentoriaModel.convertPayload(mentorias);

      filteredMentorias = filteredMentorias.filter(item => item.status === 'Realizada');

      this.dataSource = new MatTableDataSource(filteredMentorias);

      if (user.getUser()?.isMentor) {
        this.userType = 'Mentorado';
        filteredMentorias.forEach(element => {
          this.userRatings.push(element.rating_mentorado);
        })
      } else if (user.getUser()?.isMentee) {
        filteredMentorias.forEach(element => {
          this.userRatings.push(element.rating_mentor);
        })
      }

      console.log(this.userRatings);
      
    }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setMentoriaStatus(id: String, newStatus: String) {
    console.log(id);
    console.log(newStatus);
    this.mentoriaService.updateMentoriaStatus(id, newStatus).subscribe(() =>
    this.snackBar.open("Mentoria " + newStatus, "Dismiss", {
      duration: 2000,
    })
  );
  this.router
      .navigate([""], { skipLocationChange: true })
      .then(() => this.router.navigate(["/mentee/historico"]));
  }

  onRatingClicked(id: String, rating: number, i: number) {
    this.userRatings.splice(i, 1);
    this.userRatings.splice(i, 0, rating);
    console.log(`User rated with ${rating} stars.`);
    console.log(this.userRatings);

    if(this.userType === 'Mentor') {
      this.mentoriaService.updateRatingMentor(id, rating).subscribe(() => {})
    } else {
      this.mentoriaService.updateRatingMentorado(id, rating).subscribe(() => {})
    }
  }
}
