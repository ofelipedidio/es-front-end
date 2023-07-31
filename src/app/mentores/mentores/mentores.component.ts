import { MentorModel } from "../../models/mentores-model";
// mentors.component.ts

import { Component, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MentoresService } from "../../services/mentores.service";

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-mentors",
  templateUrl: "./mentores.component.html",
  styleUrls: ["./mentores.component.scss"],
})

export class MentoresComponent {
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

@Component({
  selector: 'app-modal',
  templateUrl: 'mentoria.html',
  styleUrls: ['mentoria.css'],
})
export class ModalComponent {
  show: boolean = false;
  @Input() mentoria: any;

  constructor(private formBuilder: FormBuilder) {
    this.mentoria = this.formBuilder.group({
      duracao: '',
      formato: '',
      recompensa: ''
    })
  }

  toggle() {
    this.show = !this.show;
  }

  sendAndToggle() {
    console.log(this.mentoria.value.duracao);
    console.log(this.mentoria.value.formato);
    console.log(this.mentoria.value.recompensa);
    this.mentoria.reset();
    this.toggle();
  }

  deleteAndToggle() {
    this.mentoria.reset();
    this.toggle();
  }
}