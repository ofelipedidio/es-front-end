import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";

import { MenteeRoutingModule } from "./mentee-routing.module";
import { HomeComponent } from "./home/home.component";
import { MenteeComponent } from "./mentee.component";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [HomeComponent, MenteeComponent],
  imports: [
    CommonModule,
    MenteeRoutingModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    NgFor,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule
  ],
})
export class MenteeModule {}
