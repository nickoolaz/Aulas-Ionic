import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstilizacaoPageRoutingModule } from './estilizacao-routing.module';

import { EstilizacaoPage } from './estilizacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstilizacaoPageRoutingModule
  ],
  declarations: [EstilizacaoPage]
})
export class EstilizacaoPageModule {}
