import { UserModel } from "src/app/models/user-model";
import { UserService } from "./../../services/user.service";
import { AfterViewInit, Component } from "@angular/core";

@Component({
  selector: "app-display-perfil",
  templateUrl: "./display-perfil.component.html",
  styleUrls: ["./display-perfil.component.scss"],
})
export class DisplayPerfilComponent implements AfterViewInit {
  public user: UserModel | undefined;
  constructor(private userService: UserService) {}
  ngAfterViewInit(): void {
    this.user = this.userService.getUser();
  }
}
