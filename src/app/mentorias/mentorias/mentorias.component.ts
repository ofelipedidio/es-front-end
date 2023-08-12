import { MentoriaModel } from "../../models/mentorias-model";

import { Component, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MentoriasService } from "../../services/mentorias.service";

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-mentorias",
  templateUrl: "./mentorias.component.html",
  styleUrls: ["./mentorias.component.scss"],
})

export class MentoriasComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ["mentor", "mentorado", "duracao", "formato", "recompensa"];

  constructor(private mentoriaService: MentoriasService, private formBuilder: FormBuilder) {
    this.mentoriaService.getMentorias().subscribe((mentorias) => {
      this.dataSource = new MatTableDataSource(
        MentoriaModel.convertPayload(mentorias)
      );
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}