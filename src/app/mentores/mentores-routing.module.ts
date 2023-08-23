
import { MentoriasComponent } from "./../mentorias/mentorias/mentorias.component";
//import { MentoresHomeComponent } from "./mentores-home/mentores-home.component";

import { TagSolicitada } from "./mentores-home/mentores-home.component";

import { MentoresComponent } from "./mentores/mentores.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

  { path: "list", component: MentoresComponent },
  {
    path: "",
    component: TagSolicitada,
    children: [
      {
        path: "mentoria",
        component: MentoriasComponent,
      },
    ],
  },

  //{ path: "", component: MentoresComponent },
  { path: "home", component: TagSolicitada },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentoresRoutingModule {}
