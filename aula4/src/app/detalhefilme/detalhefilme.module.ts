import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhefilmePageRoutingModule } from './detalhefilme-routing.module';

import { DetalhefilmePage } from './detalhefilme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhefilmePageRoutingModule
  ],
  declarations: [DetalhefilmePage]
})
export class DetalhefilmePageModule {}
