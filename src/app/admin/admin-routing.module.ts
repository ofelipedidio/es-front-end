import { RelatorioRequestComponent } from "./../relatorio/relatorio-request/relatorio-request.component";
import { AdmtagComponent } from "../tags/admtag/admtag.component";
import { RelatorioComponent } from "./../relatorio/relatorio/relatorio.component";
import { AdminComponent } from "./admin.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "relatorio",
        component: RelatorioRequestComponent,
      },
      {
        path: "relatorio/:start:/:end:",
        component: RelatorioComponent,
      },
      {
        path: "tag",
        component: AdmtagComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
