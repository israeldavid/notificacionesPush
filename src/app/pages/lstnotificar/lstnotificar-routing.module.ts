import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LstnotificarPage } from './lstnotificar.page';

const routes: Routes = [
  {
    path: '',
    component: LstnotificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LstnotificarPageRoutingModule {}
