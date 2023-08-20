import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { RelatorioRequestComponent } from './relatorio-request/relatorio-request.component';


const routes: Routes = [
  { path: ':start/:end', component: RelatorioComponent},
  { path: '', component: RelatorioRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioRoutingModule { }
