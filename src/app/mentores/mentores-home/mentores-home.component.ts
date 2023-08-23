import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { TagFactory } from "./../../factory/TagFactory";
import { Router } from "@angular/router";
//
//@Component({
//  selector: 'app-mentores-home',
//  templateUrl: './mentores-home.component.html',
//  styleUrls: ['./mentores-home.component.scss']
//})
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TagsServiceService } from 'src/app/services/tags.service.service';
import { TagModel } from 'src/app/models/tag';

/** @title Simple form field */
@Component({
  selector: 'app-mentores-home',
  templateUrl: './mentores-home.component.html',
  styleUrls: ['./mentores-home.component.scss'],
})
//export class FormFieldOverviewExample {}
export class TagSolicitada {//implements OnInit{
  myFormControl = new FormControl();
  registerForm: FormGroup;
    show: boolean = false;
    nameTag: String = "";
    treated: boolean = false;
    
    
    constructor(
      private formBuilder: FormBuilder,
      private formFactory: TagFactory,
      private snackBar: MatSnackBar,
      private service: TagsServiceService
      ) {
        this.registerForm = this.formBuilder.group(
          this.formFactory.make("empty", false));
    }
  
   // ngOnInit(): void{
   //   this.registerForm = this.formBuilder.group({nameTag: [null, Validators.required]});
   // }

  


   toggle() {
     this.show = !this.show;
   }

   onSubmit() {
    if(true){//this.registerForm.get('nameTag')){
      //const enteredString = this.registerForm.get("nameTag").value;
      //this.nomeTag = enteredString;
      //console.log(enteredString);    
      console.log(this.nameTag);
      //const enteredString = this.registerForm.get('nameTag')?.value;
      //this.registerForm.setValue({nameTag: enteredString,
      //treated: this.treated,
      //show: this.show});

      
      this.service.sendTag(new TagModel(this.nameTag, false)).subscribe({
        error: (err) => {
          if (err.status === 400) {
            this.snackBar.open("Senha incorreta!", "Dismiss", {
              duration: 2000,
            });
          } else if (err.status === 401) {
            this.snackBar.open(
              "Usuario não possui a role selecionada",
              "Dismiss",
              {
                duration: 200,
              }
            );
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
      this.toggle();
    } 
    else{
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