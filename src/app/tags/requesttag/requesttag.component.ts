import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { TagFactory } from "./../../factory/TagFactory";
import { Router } from "@angular/router";

import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TagsServiceService } from "src/app/services/tags.service.service";
import { TagModel } from "src/app/models/tag";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-requesttag',
  templateUrl: './requesttag.component.html',
  styleUrls: ['./requesttag.component.scss']
})
export class RequesttagComponent {
  myFormControl = new FormControl();
  registerForm: FormGroup;
  show: boolean = false;
  nameTag: String = "";
  treated: boolean = false;

  constructor(
    private tagService: TagsServiceService,

    private formBuilder: FormBuilder,
    private formFactory: TagFactory,
    private snackBar: MatSnackBar,
    private service: TagsServiceService
  ) {
    this.registerForm = this.formBuilder.group(
      this.formFactory.make("empty", false)
    );

  }

  toggle() {
    this.show = !this.show;
  }

  onSubmit() {
    if (this.nameTag != "") {

      console.log(this.nameTag);

      this.service.sendTag(new TagModel(this.nameTag.toUpperCase(), false)).subscribe({
        error: (err) => {
          console.log(err.status);
          if (err.status == 409) {
            this.snackBar.open("Tag já existente ou sob análise", "Dismiss", {
              duration: 2000,
            });
          } else {
            this.snackBar.open("Credenciais invalidas!", "Dismiss", {
              duration: 2000,
            });
          }
        },
        next: (response) => {
          this.nameTag = "";
        },
      });
      this.nameTag = "";
      this.toggle();
    } else {
      console.log(this.registerForm.value);
      alert("Por favor preencha todos os campos necessários");
    }
  }

  deleteAndToggle() {
    this.treated = false;
    this.nameTag = "";
    this.toggle();
  }



  
}


