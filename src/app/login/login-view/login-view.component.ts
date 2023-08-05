import { Router } from "@angular/router";
import { LoginService } from "./../../services/login.service";
import { Component, Injectable } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { LoginModel } from "src/app/models/login-model";

@Component({
  selector: "app-login-view",
  templateUrl: "./login-view.component.html",
  styleUrls: ["./login-view.component.scss"],
})
@Injectable({
  providedIn: "root",
})
export class LoginViewComponent {
  hide = true;
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required]);
  isMentor = false;
  isMentee = false;

  constructor(private service: LoginService, private router: Router) {}

  getErrorMessage() {
    if (this.email.hasError("required")) {
      return "Você deve colocar um valor";
    }

    return this.email.hasError("email") ? "Não é email valido" : "";
  }

  login() {
    if (!this.email.hasError) {
      return "Voce deve inserir um email valido!";
    }

    return this.service
      .login(
        new LoginModel(
          this.email.value || "",
          this.password.value || "",
          this.isMentor,
          this.isMentee
        )
      )
      .subscribe((response) => {
        if (this.isMentee) {
          this.router.navigate(["/mentee"]);
        } else if (this.isMentor) {
          this.router.navigate(["/mentores"]);
        }
      })
      .add(() => {
        console.error("Not auth");
      });
  }
}
