import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class UserFormGroupFactory {
  public make(
    name: String,
    email: String,
    password: String,
    birthDate: Date,
    accountType: String,
    experiences: String[],
    cargo: String
  ) {
    return {
      name: [name, Validators.required],
      email: [email, [Validators.required, Validators.email]],
      password: [password, Validators.required],
      confirmPassword: [password, Validators.required],
      birthdate: [birthDate, Validators.required],
      accountType: [accountType, Validators.required],
      experiences: [experiences],
      cargo: [cargo],
    };
  }
}
