import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DisplayPerfilComponent } from "./display-perfil/display-perfil.component";

const routes: Routes = [{ path: "perfil", component: DisplayPerfilComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilRoutingModule {}
