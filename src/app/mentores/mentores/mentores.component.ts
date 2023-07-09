import { MentorModel } from "./mentores-model";
// mentors.component.ts

import { Component } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MentoresService } from "./mentores-service.service";

@Component({
  selector: "app-mentors",
  templateUrl: "./mentores.component.html",
  styleUrls: ["./mentores.component.scss"],
})
export class MentoresComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ["nameRole", "tags", "action"];

  constructor(private mentorService: MentoresService) {
    this.mentorService.getMentores().subscribe((mentors) => {
      this.dataSource = new MatTableDataSource(
        MentorModel.convertPayload(mentors)
      );
    });
  }

  onButtonClick(mentor: any) {
    console.log(`${mentor} selecionado`);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
