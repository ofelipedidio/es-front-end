import { MentorModel } from "./../mentores/mentores-model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";

@Component({
  selector: "app-create-mentor",
  templateUrl: "./create-mentor.component.html",
  styleUrls: ["./create-mentor.component.scss"],
})
export class CreateMentorComponent {
  mentor: MentorModel = new MentorModel("", "", []);
  separatorKeysCodes: number[] = [ENTER, COMMA];

  remove(tag: String): void {
    const index = this.mentor.tags.indexOf(tag);

    if (index >= 0) {
      this.mentor.tags.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || "").trim();

    if (value) {
      this.mentor.tags.push(value);
    }

    event.chipInput!.clear();
  }

  createMentor(): void {
    this.mentor = new MentorModel("", "", []);
  }
}
