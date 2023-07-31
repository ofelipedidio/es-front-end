import { M } from '@angular/cdk/keycodes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path:'login',loadChildren: () => import('./login/login.module').then((module) => module.LoginModule)},
  {
    path: 'mentores',
    loadChildren: () =>
      import('./mentores/mentores.module').then((m) => m.MentoresModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
