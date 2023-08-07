import { RegisterViewComponent } from "./register-view/register-view.component";
import { LoginViewComponent } from "./login-view/login-view.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", component: LoginViewComponent },
  { path: "register", component: RegisterViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
