import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MentoresRoutingModule } from "./mentores-routing.module";
import { MentoresComponent } from "./mentores/mentores.component";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [MentoresComponent],
  imports: [
    CommonModule,
    MentoresRoutingModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
})
export class MentoresModule {}
