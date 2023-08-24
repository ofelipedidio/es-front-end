import { MentoriaModel } from "../../models/mentorias-model";

import { Component, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MentoriasService } from "../../services/mentorias.service";

import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "src/app/services/user.service";

import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: "app-mentorias",
  templateUrl: "./mentorias.component.html",
  styleUrls: ["./mentorias.component.scss"],
})
export class MentoriasComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = [
    "mentor",
    "mentorado",
    "duracao",
    "formato",
    "recompensa",
    "status",
  ];

  constructor(
    private mentoriaService: MentoriasService,
    private formBuilder: FormBuilder,
    public user: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loadMentorias(user);
  }

  private loadMentorias(user: UserService) {
    this.mentoriaService.getMentorias(user).subscribe((mentorias) => {
      let filteredMentorias = MentoriaModel.convertPayload(mentorias);

      if (user.getUser()?.isMentor) {
        filteredMentorias = filteredMentorias.filter(
          (item) => item.status === "Em Análise" || item.status === "Aceitada"
        );
        if (!this.displayedColumns.includes("aceitar")) {
          this.displayedColumns.push("aceitar");
        }
      } else if (user.getUser()?.isMentee) {
        filteredMentorias = filteredMentorias.filter(
          (item) => item.status !== "Realizada"
        );
        this.displayedColumns.push("realizada");
      }

      this.dataSource = new MatTableDataSource(filteredMentorias);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setMentoriaStatus(id: String, newStatus: String) {
    this.mentoriaService.updateMentoriaStatus(id, newStatus).subscribe(() =>
      this.snackBar.open("Mentoria " + newStatus, "Dismiss", {
        duration: 2000,
      })
    );

    this.loadMentorias(this.user);
  }

  showAcceptButton(status: String) {
    return status != "Aceitada";
  }

  showButton(status: String) {
    return status === "Aceitada" && this.user.getRole() !== "MENTOR";
  }
}
