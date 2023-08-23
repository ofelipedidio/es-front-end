import { MatSidenavModule } from "@angular/material/sidenav";
import { NgModule } from "@angular/core";
import { AsyncPipe, CommonModule, NgFor } from "@angular/common";

import { MentoresRoutingModule } from "./mentores-routing.module";
import { MentoresComponent } from "./mentores/mentores.component";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, NgModel, ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSelectModule } from "@angular/material/select";

import { TagSolicitada } from "./mentores-home/mentores-home.component";
import { ModalComponent } from "./mentores/modal/modal.component";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [MentoresComponent, TagSolicitada, ModalComponent],
  imports: [
    CommonModule,
    MentoresRoutingModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    MatChipsModule,
    NgFor,
    MatIconModule,
    ReactiveFormsModule,
    AsyncPipe,
    FormsModule,
    MatSnackBarModule,
    FormsModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
  ],
})
export class MentoresModule {}
