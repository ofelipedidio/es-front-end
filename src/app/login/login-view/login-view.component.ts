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

  constructor(private service: LoginService) {}

  getErrorMessage() {
    if (this.email.hasError("required")) {
      return "Você deve colocar um valor";
    }

    return this.email.hasError("email") ? "Não é email valido" : "";
  }

  login() {
    if (!this.email.hasError) {
      return "Voce deve inserir um email valid!";
    }

    return this.service
      .login(
        new LoginModel(
          this.email.value || "",
          this.password.value || "",
          false,
          false
        )
      )
      .subscribe((response) => console.log(response));
  }
}
