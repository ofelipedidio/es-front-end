import { DisplayPerfilComponent } from "./../perfil/display-perfil/display-perfil.component";
import { MentoresComponent } from "./../mentores/mentores/mentores.component";
import { MenteeComponent } from "./mentee.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: MenteeComponent,
    children: [
      {
        path: "mentores",
        component: MentoresComponent,
      },
      {
        path: "perfil",
        component: DisplayPerfilComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenteeRoutingModule {}
