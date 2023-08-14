import { UserModel } from "./../../models/user-model";
import { UserService } from "./../../services/user.service";
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
    private snackBar: MatSnackBar,
    private userService: UserService
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
          if (err.status === 400) {
            this.snackBar.open("Senha incorreta!", "Dismiss", {
              duration: 2000,
            });
          } else if (err.status === 401) {
            this.snackBar.open(
              "Usuario não possui a role selecionada",
              "Dismiss",
              {
                duration: 200,
              }
            );
          } else {
            this.snackBar.open("Credenciais invalidas!", "Dismiss", {
              duration: 2000,
            });
          }
        },
        next: (response) => {
          this.userService.setUser(
            new UserModel(
              response.email,
              response.id,
              response.token,
              response.first_name,
              response.last_name,
              response.isMentor,
              response.isMentee,
              response.password
            )
          );
          routing();
        },
      });
  }

  private isMentee(): boolean {
    return this.type === this.menteeValue;
  }

  private isMentor(): boolean {
    return this.type === this.mentorValue;
  }
}
