import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DisplayPerfilComponent } from "./perfil/display-perfil/display-perfil.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((module) => module.LoginModule),
  },
  {
    path: "mentores",
    loadChildren: () =>
      import("./mentores/mentores.module").then((m) => m.MentoresModule),
  },
  {
    path: "mentee",
    loadChildren: () =>
      import("./mentee/mentee.module").then((m) => m.MenteeModule),
  },
  {
    path: "mentorias",
    loadChildren: () =>
      import("./mentorias/mentorias.module").then((m) => m.MentoriasModule),
  },
  {
    path: "perfil",
    component: DisplayPerfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
