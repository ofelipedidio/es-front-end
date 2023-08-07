// register-view.component.ts
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";

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

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      birthdate: ["", Validators.required],
      accountType: ["Mentorado", Validators.required],
      experiences: [""],
    });
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

    console.log(this.registerForm.value);
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
}
