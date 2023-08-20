import { MentoriaModel } from "../../models/mentorias-model";

import { Component, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MentoriasService } from "../../services/mentorias.service";

import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from "src/app/services/user.service";

import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: "app-mentorias",
  templateUrl: "./mentorias.component.html",
  styleUrls: ["./mentorias.component.scss"],
})

export class MentoriasComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ["mentor", "mentorado", "duracao", "formato", "recompensa", "status"];

  constructor(private mentoriaService: MentoriasService, private formBuilder: FormBuilder, public user: UserService,
    private snackBar: MatSnackBar, private router: Router) {
    this.mentoriaService.getMentorias(user).subscribe((mentorias) => {
      this.dataSource = new MatTableDataSource(
        MentoriaModel.convertPayload(mentorias)
      );
      if (user.getUser()?.isMentor) {
        this.displayedColumns.push("aceitar");
        
        this.dataSource.filteredData.forEach(function(item, index, object) {
          if (item.status !== 'Em Análise') {
            object.splice(index, 1);
          }
        })
      }
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
      .then(() => this.router.navigate(["/mentorias"]));
  }
}