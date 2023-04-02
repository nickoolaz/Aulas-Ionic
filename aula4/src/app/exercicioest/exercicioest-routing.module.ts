import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercicioestPage } from './exercicioest.page';

const routes: Routes = [
  {
    path: '',
    component: ExercicioestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercicioestPageRoutingModule {}
