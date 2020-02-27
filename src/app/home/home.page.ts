import { Component,OnInit } from '@angular/core';
import { NotificacionesService } from '../services/notificaciones.service';
import { Notificacion } from '../interfaces/interface.notificacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  notificaciones:Notificacion;
  titulo:string;
  cuerpo: string;

  constructor(private ns:NotificacionesService,private router:Router) {}

  ngOnInit(){
    this.notificaciones = this.ns.obtenerNotificacion();
    this.titulo = this.notificaciones.title;
    this.cuerpo = this.notificaciones.body;
  }

  iraNotificaciones(){
    this.router.navigateByUrl('listado-notificaciones');
  }

}
