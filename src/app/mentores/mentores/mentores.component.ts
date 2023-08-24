import { UserService } from "./../../services/user.service";
import { MentorModel } from "../../models/mentores-model";
import { Component } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MentoresService } from "../../services/mentores.service";

@Component({
  selector: "app-mentors",
  templateUrl: "./mentores.component.html",
  styleUrls: ["./mentores.component.scss"],
})
export class MentoresComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ["nameRole", "tags", "action"];

  constructor(
    private mentorService: MentoresService,
    public userService: UserService
  ) {
    this.mentorService.getMentores().subscribe((mentors) => {
      this.dataSource = new MatTableDataSource(
        MentorModel.convertPayload(mentors)
      );
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
