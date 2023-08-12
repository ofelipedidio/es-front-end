import { Component, Input } from '@angular/core';
import { MentoriaModel } from "../../../models/mentorias-model";
import { MentoriasService } from "../../../services/mentorias.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
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
