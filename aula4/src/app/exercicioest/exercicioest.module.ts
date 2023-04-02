import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercicioestPageRoutingModule } from './exercicioest-routing.module';

import { ExercicioestPage } from './exercicioest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercicioestPageRoutingModule
  ],
  declarations: [ExercicioestPage]
})
export class ExercicioestPageModule {}
