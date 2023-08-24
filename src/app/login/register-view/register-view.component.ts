import { RoutingProxy } from "./../../proxy/routing-proxy";
import { UserFormGroupFactory } from "./../../factory/UserFormGroupFactory";
import { Login } from "./../../models/login-model";
import { LoginService } from "./../../services/login.service";
import { MenteeService } from "./../../services/mentee.service";
import { UserService } from "./../../services/user.service";
import { MentoresService } from "./../../services/mentores.service";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { UserModel } from "src/app/models/user-model";
import { Router } from "@angular/router";

@Component({
  selector: "app-register-view",
  templateUrl: "./register-view.component.html",
  styleUrls: ["./register-view.component.scss"],
})
export class RegisterViewComponent {
  registerForm: FormGroup;
  confirmPassword = "";
  separatorKeysCodes: number[] = [ENTER, COMMA];
  experiences: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loginService: LoginService,
    private router: Router,
    private formFactory: UserFormGroupFactory,
    private routingProxy: RoutingProxy
  ) {
    this.registerForm = this.formBuilder.group(
      this.formFactory.make("", "", "", "", new Date(), "Mentorado", [""], "")
    );
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      alert("Por favor preencha todos os campos necessários");
      return;
    }

    if (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    ) {
      alert("As senhas devem ser iguais!");
      return;
    }

    const registerForm = this.registerForm.value;
    const isMentor = registerForm.accountType === "Mentor";
    //Ajustar back para bater com isso aqui
    const user = new UserModel(
      registerForm.email,
      "",
      "",
      registerForm.name,
      registerForm.birthDate,
      isMentor,
      !isMentor,
      registerForm.password,
      registerForm.phone,
    );
    if (isMentor) {
      user.tags = this.experiences;
      user.cargo = registerForm.cargo;
    }
    this.loginService.register(user).subscribe({
      //Add error handling aqui
      next: (response) => {
          console.log(response);
        this.userService.setUser(user, isMentor, !isMentor);
        this.router.navigate(this.routingProxy.routing(isMentor, !isMentor));
      },
      error: (err) => {
          if (err.status == 409) {
              alert("Uma conta com esse mail já foi cadastrada!");
          }
          return;
      }
    });
  }

  onAccountTypeChange() {
    const accountType = this.registerForm.value.accountType;
  
    if (accountType === "Mentor") {
      this.registerForm.get("experiences")?.setValidators([Validators.required]);
      this.registerForm.get("cargo")?.setValidators([Validators.required]);
    } else {
      this.registerForm.get("experiences")?.clearValidators();
      this.registerForm.get("cargo")?.clearValidators();
    }
  
    this.registerForm.get("experiences")?.updateValueAndValidity();
    this.registerForm.get("cargo")?.updateValueAndValidity();
  }

  addExperience(event: MatChipInputEvent): void {
    const input = event.chipInput.inputElement;
    const value = event.value;

    if ((value || "").trim() && !this.experiences.includes(value.trim())) {
      this.experiences.push(value.trim());
    }

    if (input) {
      input.value = "";
    }
  }

  removeExperience(experience: string): void {
    const index = this.experiences.indexOf(experience);

    if (index >= 0) {
      this.experiences.splice(index, 1);
    }
  }
}
