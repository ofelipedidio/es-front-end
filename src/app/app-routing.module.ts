import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mentores' },
  {
    path: 'mentores',
    loadChildren: () =>
      import('./mentores/mentores.module').then((m) => m.MentoresModule),
  },
  {
    path: 'mentorias',
    loadChildren: () =>
      import('./mentorias/mentorias.module').then((m) => m.MentoriasModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
