import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  
  notificacion:any;

  constructor(private fcm: FCM) { }

  obtenerToken() {
    this.fcm.getToken().then(token => {
      alert(JSON.stringify(token));
    });
  }

  obtenerNotificacion() {
    //this.obtenerToken();
    this.suscribirse();
    this.fcm.onNotification().subscribe(data => {
      this.notificacion=data;
      alert(JSON.stringify(data));
      if (data.wasTapped) {
        //me indica si la aplicacion esta cerrada o no esta activa
        alert("Llego la notificacion");
      } else {
        //la aplicación el usuario la tiene abierta
        alert("Llego la notificacion abierta la aplicación");
      }
    });
    return this.notificacion;
  }

  refrescarToken() {
    this.fcm.onTokenRefresh().subscribe(token => {
      console.log(token);
      alert(JSON.stringify(token));
    });
  }

  suscribirse(){
    this.fcm.subscribeToTopic('people_desa');
    this.fcm.getToken().then(token => {
    });
  }

  desuscribirse() {
    this.fcm.unsubscribeFromTopic('ofertas');
  }


}
