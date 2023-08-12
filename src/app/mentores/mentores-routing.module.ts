import { MentoresHomeComponent } from "./mentores-home/mentores-home.component";
import { MentoresComponent } from "./mentores/mentores.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", component: MentoresComponent },
  { path: "home", component: MentoresHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentoresRoutingModule {}
