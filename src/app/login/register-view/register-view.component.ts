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
      alert("Please fill in all required fields correctly.");
      return;
    }

    if (this.registerForm.value.password !== this.confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    // Here, you can implement your account creation logic and handle the form data
    // For simplicity, we'll just log the data for now.
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

    // Add experience only if it is not empty and not a duplicate
    if ((value || "").trim() && !this.experiences.includes(value.trim())) {
      this.experiences.push(value.trim());
    }

    // Reset the input value
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
