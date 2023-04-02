import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhefilmePage } from './detalhefilme.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhefilmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhefilmePageRoutingModule {}
