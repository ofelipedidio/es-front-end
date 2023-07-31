import { MentorModel } from "../../models/mentores-model";
// mentors.component.ts

import { Component, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MentoresService } from "../../services/mentores.service";

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-mentorias",
  templateUrl: "./mentorias.component.html",
  styleUrls: ["./mentorias.component.scss"],
})

export class MentoriasComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ["nameRole", "tags", "action"];

  constructor(private mentorService: MentoresService, private formBuilder: FormBuilder) {
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