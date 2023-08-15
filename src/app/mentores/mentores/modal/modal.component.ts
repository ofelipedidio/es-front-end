import { Component, Input, Inject } from '@angular/core';
import { MentoriaModel } from "../../../models/mentorias-model";
import { MentoriasService } from "../../../services/mentorias.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [UserService]
})
export class ModalComponent {
  show: boolean = false;
  @Input() mentoria: any;
  newMentoria: MentoriaModel = new MentoriaModel("", "", "", "", "");
  mentorName: String = '';

  constructor(private formBuilder: FormBuilder, private mentoriaService: MentoriasService, 
    private snackBar: MatSnackBar, private router: Router) {
    this.mentoria = this.formBuilder.group({
      duracao: '',
      formato: '',
      recompensa: ''
    })
  }

  toggle(mentorName: String) {
    this.show = !this.show;
    this.mentorName = mentorName;
  }

  sendAndToggle(user: UserService) {
    console.log(this.mentorName);
    this.newMentoria = new MentoriaModel(this.mentorName, user.getUser()!.first_name, this.mentoria.value.duracao, 
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
    this.toggle('');
  }

  deleteAndToggle() {
    this.mentoria.reset();
    this.toggle('');
  }
}
