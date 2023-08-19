import { UserFormGroupFactory } from "./../../factory/UserFormGroupFactory";
import { UserModel } from "src/app/models/user-model";
import { UserService } from "./../../services/user.service";
import { AfterViewInit, Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-display-perfil",
  templateUrl: "./display-perfil.component.html",
  styleUrls: ["./display-perfil.component.scss"],
})
export class DisplayPerfilComponent implements AfterViewInit {
  public user: UserModel | undefined;
  isEditing: boolean = false;
  userForm: FormGroup | undefined;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private formFactory: UserFormGroupFactory
  ) {}
  ngAfterViewInit(): void {
    this.user = this.userService.getUser();
    if (this.user) {
      this.userForm = this.formBuilder.group(
        this.formFactory.make(
          `${this.user.first_name} + ${this.user.last_name}`,
          this.user.email,
          "",
          "",
          "",
          this.user.tags,
          this.user.cargo
        )
      );
    }
  }
}
