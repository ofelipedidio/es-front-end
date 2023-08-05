import { Component } from "@angular/core";

@Component({
  selector: "app-mentee",
  templateUrl: "./mentee.component.html",
  styleUrls: ["./mentee.component.scss"],
})
export class MenteeComponent {
  events: string[] = [];
  opened: boolean = true;
}
