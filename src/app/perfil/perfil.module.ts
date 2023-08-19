import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PerfilRoutingModule } from "./perfil-routing.module";
import { DisplayPerfilComponent } from "./display-perfil/display-perfil.component";

@NgModule({
  declarations: [DisplayPerfilComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
})
export class PerfilModule {}
