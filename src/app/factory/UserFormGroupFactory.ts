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
    phone: String,
    birthDate: Date,
    accountType: String,
    cargo: String
  ) {
    return {
      name: [name, Validators.required],
      email: [email, [Validators.required, Validators.email]],
      password: [password, Validators.required],
      phone: [phone, Validators.required],
      confirmPassword: [password, Validators.required],
      birthDate: [birthDate, Validators.required],
      accountType: [accountType, Validators.required],
      cargo: [cargo],
    };
  }
}
