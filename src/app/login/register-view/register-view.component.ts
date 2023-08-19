import { UserFormGroupFactory } from "./../../factory/UserFormGroupFactory";
import { Login } from "./../../models/login-model";
import { LoginService } from "./../../services/login.service";
import { MenteeService } from "./../../services/mentee.service";
import { UserService } from "./../../services/user.service";
import { MentoresService } from "./../../services/mentores.service";
// register-view.component.ts
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
    private mentorService: MentoresService,
    private userService: UserService,
    private menteeService: MenteeService,
    private loginService: LoginService,
    private router: Router,
    private formFactory: UserFormGroupFactory
  ) {
    this.registerForm = this.formBuilder.group(
      this.formFactory.make("", "", "", new Date(), "Mentorado", [""], "")
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
      registerForm.password
    );
    if (isMentor) {
      user.tags = this.experiences;
      user.cargo = registerForm.cargo;
    }
    this.loginService.register(user).subscribe({
      //Add error handling aqui
      next: (response) => {
        this.userService.setUser(user, isMentor, !isMentor);
        this.routing(isMentor);
      },
    });
  }

  onAccountTypeChange() {
    if (this.registerForm.value.accountType !== "Mentor") {
      this.registerForm.get("experiences")?.setValue("");
    }
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

  //Remover duplicação
  routing = (isMentor: boolean) => {
    if (!isMentor) {
      this.router.navigate(["/mentee/mentores"]);
    } else if (isMentor) {
      this.router.navigate(["/mentorias"]);
    }
  };
}
