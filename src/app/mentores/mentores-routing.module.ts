import { MentoresHomeComponent } from "./mentores-home/mentores-home.component";
import { CreateMentorComponent } from "./create-mentor/create-mentor.component";
import { MentoresComponent } from "./mentores/mentores.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", component: MentoresComponent },
  { path: "home", component: MentoresHomeComponent },
  { path: "criar-mentor", component: CreateMentorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentoresRoutingModule {}
