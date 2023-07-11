import { MentoresService } from "./../mentores/mentores-service.service";
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

  constructor(
    private mentorService: MentoresService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

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
    this.mentorService.createMentor(this.mentor).subscribe(() =>
      this.snackBar.open("Mentor criado!", "Dismiss", {
        duration: 2000,
      })
    );
    this.mentor = new MentorModel("", "", []);
    this.router
      .navigate([""], { skipLocationChange: true })
      .then(() => this.router.navigate([""]));
  }
}
