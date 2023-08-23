import { HistoricoComponent } from "../historico/historico.component";
import { MentoriasComponent } from "./../mentorias/mentorias/mentorias.component";
import { MentoresHomeComponent } from "./mentores-home/mentores-home.component";
import { MentoresComponent } from "./mentores/mentores.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "list", component: MentoresComponent },
  {
    path: "",
    component: MentoresHomeComponent,
    children: [
      {
        path: "mentoria",
        component: MentoriasComponent,
      },
      {
        path: "historico",
        component: HistoricoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentoresRoutingModule {}
