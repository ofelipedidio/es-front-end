import { Router } from "@angular/router";
import { LoginService } from "./../../services/login.service";
import { UserFormGroupFactory } from "./../../factory/UserFormGroupFactory";
import { UserModel } from "src/app/models/user-model";
import { UserService } from "./../../services/user.service";
import { AfterViewInit, Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MentoriasService } from "../../services/mentorias.service";
import { MatTableDataSource } from "@angular/material/table";
import { MentoriaModel } from "../../models/mentorias-model";

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
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private formFactory: UserFormGroupFactory,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar,
    private mentoriaService: MentoriasService
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
          this.user.phone,
          this.user.birthDate,
          "",
          this.user.mentor.tags,
          this.user.mentor.cargo
        )
      );
    }
  }

  public onConfirm() {
    if (this.user) {
      const userData = this.userForm.value;
      console.log("DBG1:", userData);
      const userCommand = new UserModel(
        this.user.email,
        this.user._id,
        this.user.token,
        userData.name,
        userData.birthDate,
        this.user.isMentor,
        this.user.isMentee,
        this.user.password,
        userData.phone,
        { tags: userData.experiences, cargo: userData.cargo }
      );
      this.loginService.update(userCommand).subscribe({
        error: (err) => {
          console.error(err);
          this.snackBar.open("Erro na edição de Usuario!", "Dismiss", {
            duration: 2000,
          });
        },
        next: (response) => {
            console.log("DBG2:", response);
          this.userService.setUser(
            new UserModel(
              response.email,
              response._id,
              response.token,
              response.name,
              response.birthDate,
              response.isMentor,
              response.isMentee,
              response.password,
              response.phone,
              response.mentor,
              response.mentor?.tags,
              response.mentor?.cargo,
            ),
            this.isMentor(),
            !this.isMentor(),
          );
          this.user = this.userService.getUser();
          this.isEditing = false;
        },
      });
    }
  }

  public onDelete() {
    console.log("deleting");

    if (this.user) {
      this.loginService.delete(this.user._id).subscribe({
        error: (err) => {
          console.error(err);
          this.snackBar.open("Erro na deleção de Usuario!", "Dismiss", {
            duration: 2000,
          });
        },
        next: () => {
          this.mentoriaService.getMentorias(this.userService).subscribe((mentorias) => {
            this.dataSource = new MatTableDataSource(
              MentoriaModel.convertPayload(mentorias)
            );
            this.dataSource.filteredData.forEach(element => {
              this.mentoriaService.updateMentoriaName(element._id, this.user!.isMentee).subscribe(() => {});
            });
          })
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
