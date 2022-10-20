import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  constructor() { }

  muestraMensaje(mensaje: string){
      
    alert(mensaje);

  }
}
