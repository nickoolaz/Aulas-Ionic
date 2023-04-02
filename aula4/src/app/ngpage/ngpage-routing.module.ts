import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgpagePage } from './ngpage.page';

const routes: Routes = [
  {
    path: '',
    component: NgpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgpagePageRoutingModule {}
