import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstilizacaoPage } from './estilizacao.page';

const routes: Routes = [
  {
    path: '',
    component: EstilizacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstilizacaoPageRoutingModule {}
