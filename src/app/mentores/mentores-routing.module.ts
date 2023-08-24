import { HistoricoComponent } from "../historico/historico.component";
import { RequesttagComponent } from "../tags/requesttag/requesttag.component";

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
      {
        path: "tag",
        component: RequesttagComponent,
      },
    ],
  },

  { path: "home", component: MentoresHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentoresRoutingModule {}
