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
  mentor = {
    name: "",
    role: "",
    tags: [""],
  };
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: string[] = ["Lemon"];
  fruitCtrl = new FormControl("");

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || "").trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  createMentor(): void {}
}
