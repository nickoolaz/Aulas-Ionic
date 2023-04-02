import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgpagePageRoutingModule } from './ngpage-routing.module';

import { NgpagePage } from './ngpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgpagePageRoutingModule
  ],
  declarations: [NgpagePage]
})
export class NgpagePageModule {}
