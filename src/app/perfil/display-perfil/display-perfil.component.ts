import { UserFormGroupFactory } from "./../../factory/UserFormGroupFactory";
import { UserModel } from "src/app/models/user-model";
import { UserService } from "./../../services/user.service";
import { AfterViewInit, Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NumberInput } from "@angular/cdk/coercion";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";

@Component({
  selector: "app-display-perfil",
  templateUrl: "./display-perfil.component.html",
  styleUrls: ["./display-perfil.component.scss"],
})
export class DisplayPerfilComponent implements AfterViewInit {
  public user: UserModel | undefined;
  public isEditing: boolean;
  userForm: FormGroup = this.formBuilder.group({});
  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private formFactory: UserFormGroupFactory
  ) {
    this.isEditing = false;
  }
  ngAfterViewInit(): void {
    this.user = this.userService.getUser();
    if (this.user) {
      this.userForm = this.formBuilder.group(
        this.formFactory.make(
          `${this.user.first_name} ${this.user.last_name}`,
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
  onEdit(): void {
    this.isEditing = true;
  }

  onCancel(): void {
    this.isEditing = false;
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
    return this.userForm.get("experiences") as unknown as String[];
  }

  removeExperience(experience: string): void {
    const index = this.getExperiences().indexOf(experience);

    if (index >= 0) {
      this.getExperiences().splice(index, 1);
    }
  }
}
