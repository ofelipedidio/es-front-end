import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login-view",
  templateUrl: "./login-view.component.html",
  styleUrls: ["./login-view.component.scss"],
})
export class LoginViewComponent {
  hide = true;
  email = new FormControl("", [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError("required")) {
      return "Você deve colocar um valor";
    }

    return this.email.hasError("email") ? "Não é email valido" : "";
  }
}
