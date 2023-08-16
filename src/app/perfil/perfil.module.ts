import { MatCardModule } from "@angular/material/card";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PerfilRoutingModule } from "./perfil-routing.module";
import { DisplayPerfilComponent } from "./display-perfil/display-perfil.component";

@NgModule({
  declarations: [DisplayPerfilComponent],
  imports: [CommonModule, PerfilRoutingModule, MatCardModule],
})
export class PerfilModule {}
