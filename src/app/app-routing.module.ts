import { LoginViewComponent } from "./login/login-view/login-view.component";
import { userGuard } from "./guard/user.guard";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DisplayPerfilComponent } from "./perfil/display-perfil/display-perfil.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: LoginViewComponent,
    canActivate: [userGuard],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((module) => module.LoginModule),
  },
  {
    path: "mentor",
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
  {
    path: "relatorio",
    loadChildren: () =>
      import("./relatorio/relatorio.module").then((m) => m.RelatorioModule),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
