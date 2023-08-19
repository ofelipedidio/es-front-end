import { Router } from "@angular/router";
import { LoginService } from "./../../services/login.service";
import { UserFormGroupFactory } from "./../../factory/UserFormGroupFactory";
import { UserModel } from "src/app/models/user-model";
import { UserService } from "./../../services/user.service";
import { AfterViewInit, Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NumberInput } from "@angular/cdk/coercion";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { debug } from "tauri-plugin-log-api";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-display-perfil",
  templateUrl: "./display-perfil.component.html",
  styleUrls: ["./display-perfil.component.scss"],
})
export class DisplayPerfilComponent implements AfterViewInit {
  public user: UserModel | undefined;
  public role: String | undefined;
  public isEditing: boolean;
  userForm: FormGroup = this.formBuilder.group({});
  separatorKeysCodes: number[] = [ENTER, COMMA];
  private previousUser: UserModel | undefined;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private formFactory: UserFormGroupFactory,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.isEditing = false;
  }
  public isMentor(): boolean {
    return this.role == "MENTOR";
  }
  ngAfterViewInit(): void {
    this.user = this.userService.getUser();
    this.role = this.userService.getRole();
  }

  private initializeUserForm() {
    if (this.user) {
      this.userForm = this.formBuilder.group(
        this.formFactory.make(
          this.user.name,
          this.user.email,
          "",
          this.user.birthDate,
          "",
          this.user.tags,
          this.user.cargo
        )
      );
    }
  }

  public onConfirm() {
    if (this.user) {
      // this.loginService.update(this.user);
      this.isEditing = false;
    }
  }

  public onDelete() {
    if (this.user) {
      this.loginService.delete(this.user._id).subscribe({
        error: (err) => {
          console.error(err);
          this.snackBar.open("Erro na deleção de Usuario!", "Dismiss", {
            duration: 2000,
          });
        },
        next: () => {
          this.userService.clearUser();
          this.router.navigate(["/"]);
        },
      });
    }
  }

  onEdit(): void {
    this.isEditing = true;
    this.previousUser = JSON.parse(JSON.stringify(this.user));
    this.initializeUserForm();
  }

  onCancel(): void {
    this.isEditing = false;
    this.user = this.previousUser;
  }

  addExperience(event: MatChipInputEvent): void {
    const input = event.chipInput.inputElement;
    const value = event.value;
    const experiences: String[] = this.getExperiences();

    if ((value || "").trim() && !experiences.includes(value.trim())) {
      experiences.push(value.trim());
    }

    if (input) {
      input.value = "";
    }
  }

  private getExperiences(): String[] {
    return this.userForm.value.experiences as String[];
  }

  removeExperience(experience: string): void {
    const index = this.getExperiences().indexOf(experience);

    if (index >= 0) {
      this.getExperiences().splice(index, 1);
    }
  }
}
