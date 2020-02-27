import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'listado-notificaciones',
    loadChildren: () => import('./pages/listado-notificaciones/listado-notificaciones.module').then( m => m.ListadoNotificacionesPageModule)
  },
  {
    path: 'lstnotificar',
    loadChildren: () => import('./pages/lstnotificar/lstnotificar.module').then( m => m.LstnotificarPageModule),pathMatch: 'full')
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
