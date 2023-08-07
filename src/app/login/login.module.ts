import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgModule } from "@angular/core";
import { NgFor, NgIf } from "@angular/common";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginViewComponent } from "./login-view/login-view.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { RegisterViewComponent } from './register-view/register-view.component';
@NgModule({
  declarations: [LoginViewComponent, RegisterViewComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    MatButtonToggleModule,
    NgFor,
    MatSnackBarModule,
  ],
})
export class LoginModule {}
