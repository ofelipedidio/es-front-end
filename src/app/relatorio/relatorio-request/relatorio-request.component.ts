import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";



@Component({

  selector: 'app-relatorio-request',
  templateUrl: './relatorio-request.component.html',
  styleUrls: ['./relatorio-request.component.scss']
})
export class RelatorioRequestComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      start: ["", Validators.required],
      end: ["", Validators.required]
    });
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      alert("Por favor preencha todos os campos necessários");
      return;
    }

    const registerForm = this.registerForm.value;


    if(registerForm.start > registerForm.end)
    {
      alert("Data de Inicio deve ser anterior a Data de Término");
      return;
    }
    
    this.router.navigateByUrl('/relatorio/' + new Date(registerForm.start).getTime() + '/' + new Date(registerForm.end).getTime());

  }
}
