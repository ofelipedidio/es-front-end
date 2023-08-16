import { Router } from "@angular/router";
import { UserService } from "./services/user.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "oportunia-frontend";

  constructor(private userService: UserService, private router: Router) {}

  logout() {
    this.userService.clearUser();
    this.router.navigate(["/"]);
  }
  isLogged() {
    return this.userService.getUser();
  }
}
