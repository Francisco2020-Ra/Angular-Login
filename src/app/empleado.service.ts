import { Injectable } from '@angular/core';
import { Empleado } from './empleado/empleado.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { DataService } from './data.service';

@Injectable()
export class EmpleadoService {

  constructor(
    private serviceEmpleadoService: ServicioEmpleadoService,
    private dataService: DataService) { }

empleados: Empleado[] = [];

/* empleados: Empleado[] = [
    new Empleado("Nicolas", "Gonzalez", "Presidente", 7500),
    new Empleado("Maria", "Martín", "Vicepresidente", 6500),
    new Empleado("Ana", "Lopez", "Jefa de Area", 4500),
    new Empleado("Alfredo", "Gimenez", "Supervisor", 3500),
]; */

setEmpleados(misEmpleados: Empleado[]) {
    this.empleados = misEmpleados;
}
obtenerEmpleados() {
    return this.dataService.cargarEmpleados();
}
agregarEmpleadoServicio(empleado: Empleado) {
    this.serviceEmpleadoService.muestraMensaje("Persona a agregar: " + empleado.nombre);
    this.empleados.push(empleado);

    this.dataService.guardarEmpleados(this.empleados);

}

encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];

    return empleado;
}

actualizarEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

    this.dataService.actualizarEmpleado(indice, empleado);
}

eliminarEmpleado(indice: number) {

    this.empleados.splice(indice, 1);
    this.dataService.eliminarEmpleado(indice);
    if(this.empleados!=null) this.dataService.guardarEmpleados(this.empleados);
}
}
