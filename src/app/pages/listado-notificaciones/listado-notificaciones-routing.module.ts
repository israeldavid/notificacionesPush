import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoNotificacionesPage } from './listado-notificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoNotificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoNotificacionesPageRoutingModule {}
