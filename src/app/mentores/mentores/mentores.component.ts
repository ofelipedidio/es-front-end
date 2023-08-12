import { UserService } from "./../../services/user.service";
import { MentorModel } from "../../models/mentores-model";
import { MentoriaModel } from "../../models/mentorias-model";
// mentors.component.ts

import { Component, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MentoresService } from "../../services/mentores.service";
import { MentoriasService } from "../../services/mentorias.service";

import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: "app-mentors",
  templateUrl: "./mentores.component.html",
  styleUrls: ["./mentores.component.scss"],
})

export class MentoresComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ["nameRole", "tags", "action"];


  constructor(
    private mentorService: MentoresService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {

    this.mentorService.getMentores().subscribe((mentors) => {
      this.dataSource = new MatTableDataSource(
        MentorModel.convertPayload(mentors)
      );
    });
  }


  onButtonClick(mentor: any) {
    console.log(this.userService.getUser());
    console.log(`${mentor} selecionado`);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

@Component({
  selector: 'app-modal',
  templateUrl: 'mentoria.html',
  styleUrls: ['mentoria.css'],
})
export class ModalComponent {
  show: boolean = false;
  @Input() mentoria: any;
  newMentoria: MentoriaModel = new MentoriaModel("", "", "", "", "");

  constructor(private formBuilder: FormBuilder, private mentoriaService: MentoriasService, 
    private snackBar: MatSnackBar, private router: Router) {
    this.mentoria = this.formBuilder.group({
      duracao: '',
      formato: '',
      recompensa: ''
    })
  }

  toggle() {
    this.show = !this.show;
  }

  sendAndToggle() {
    console.log(this.mentoria.value.duracao);
    console.log(this.mentoria.value.formato);
    console.log(this.mentoria.value.recompensa);
    this.newMentoria = new MentoriaModel("teste mentor", "teste mentorado", this.mentoria.value.duracao, 
    this.mentoria.value.formato, this.mentoria.value.recompensa);
    this.mentoriaService.createMentoria(this.newMentoria).subscribe(() =>
      this.snackBar.open("Mentoria solicitada!", "Dismiss", {
        duration: 2000,
      })
    );
    this.router
      .navigate([""], { skipLocationChange: true })
      .then(() => this.router.navigate(["/mentorias"]));
    this.mentoria.reset();
    this.toggle();
  }

  deleteAndToggle() {
    this.mentoria.reset();
    this.toggle();
  }
}