import { MentorModel } from "../../models/mentores-model";
// mentors.component.ts

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

  constructor(private mentorService: MentoresService) {
    this.mentorService.getMentores().subscribe((mentors) => {
      this.dataSource = new MatTableDataSource(
        MentorModel.convertPayload(mentors)
      );
    });
  }

  onButtonClick(mentor: any) {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

@Component({
  selector: 'app-modal',
  templateUrl: 'mentoria.html',
  styleUrls: ['mentoria.css'],
})
export class ModalComponent {
  show: boolean = false;

  toggle () {
    this.show = !this.show;
  }
}