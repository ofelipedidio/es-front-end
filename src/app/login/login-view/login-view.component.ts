import { MatSnackBar } from "@angular/material/snack-bar";
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
  type: string = "";
  mentorValue = "mentor";
  menteeValue = "mentee";

  constructor(
    private service: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

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

    const routing = () => {
      if (this.isMentee()) {
        this.router.navigate(["/mentee/mentores"]);
      } else if (this.isMentor()) {
        this.router.navigate(["/mentores"]);
      }
    };

    return this.service
      .login(
        new LoginModel(
          this.email.value || "",
          this.password.value || "",
          this.isMentor(),
          this.isMentee()
        )
      )
      .subscribe({
        error: (err) => {
          if (err.status === 401) {
            this.snackBar.open("Senha incorreta!", "Dismiss", {
              duration: 2000,
            });
          } else {
            this.snackBar.open("Credenciais invalidas!", "Dismiss", {
              duration: 2000,
            });
          }
        },
        complete: () => routing(),
      });
  }

  private isMentee(): boolean {
    return this.type === this.menteeValue;
  }

  private isMentor(): boolean {
    return this.type === this.mentorValue;
  }
}
