import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoNotificacionesPageRoutingModule } from './listado-notificaciones-routing.module';

import { ListadoNotificacionesPage } from './listado-notificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoNotificacionesPageRoutingModule
  ],
  declarations: [ListadoNotificacionesPage]
})
export class ListadoNotificacionesPageModule {}
