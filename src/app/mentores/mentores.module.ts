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
import { CreateMentorComponent } from "./create-mentor/create-mentor.component";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, NgModel, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [MentoresComponent, CreateMentorComponent],
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
  ],
})
export class MentoresModule {}
