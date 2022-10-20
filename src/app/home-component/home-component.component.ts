import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado/empleado.model';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  titulo = "Listado de Empleados"

  constructor(
    private servicioEmpleado: ServicioEmpleadoService,
    private servicioDataEmpleado: EmpleadoService) {

    //this.empleados = this.servicioDataEmpleado.empleados;
    this.servicioDataEmpleado.obtenerEmpleados().subscribe(
      misEmpleados => {
        console.log(misEmpleados);

        this.empleados = Object.values(misEmpleados);// los valores del objeto se guardan en el array de tipo empleados

        this.servicioDataEmpleado.setEmpleados(this.empleados);
      }
    );
  }


  empleados: Empleado[] = [];

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)

    //this.servicioEmpleado.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);

    this.servicioDataEmpleado.agregarEmpleadoServicio(miEmpleado);

  }

  cuadroNombre: string = "";
  cuadroApellido: string = ""
  cuadroCargo: string = "";
  cuadroSalario: number = 0;


}
