import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristica-empleado-c',
  templateUrl: './caracteristica-empleado-c.component.html',
  styleUrls: ['./caracteristica-empleado-c.component.css']
})
export class CaracteristicaEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();
  
  //constructor(private servicioMensaje: ServicioEmpleadosService){}

  ngOnInit(): void {
  }

  agregarCaracteristicas(value: string){
   // this.servicioMensaje.muestraMensaje(value);
    //this.caracteristicasEmpleado.emit(value);
  }

}
