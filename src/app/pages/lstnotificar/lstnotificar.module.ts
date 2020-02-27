import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LstnotificarPageRoutingModule } from './lstnotificar-routing.module';

import { LstnotificarPage } from './lstnotificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LstnotificarPageRoutingModule
  ],
  declarations: [LstnotificarPage]
})
export class LstnotificarPageModule {}
