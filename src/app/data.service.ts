import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado/empleado.model';


@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

    cargarEmpleados() {
        return this.httpClient.get('https://mis-clientes-9b97e-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
    }

    guardarEmpleados(empleados: Empleado[]) {
        this.httpClient.put('https://mis-clientes-9b97e-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados)
            .subscribe({
                next: (response) => console.log("Se han guardado los empleados: " + response),
                error: (e) => console.error("Error: " + e),

            });
    }

    actualizarEmpleado(indice: number, empleado: Empleado) {

        let url = 'https://mis-clientes-9b97e-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

        this.httpClient.put(url, empleado)
            .subscribe({


                next: (response) => console.log("Se ha actualizado el empleados: " + response),
                error: (e) => console.error("Error: " + e),

            });
    }

    eliminarEmpleado(indice: number) {
        let url = 'https://mis-clientes-9b97e-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

        this.httpClient.delete(url).subscribe({
            next: (response) => console.log("Se ha eliminado el empleado"),
            error: (e) => console.error("Error: " + e),
        })
    }

}
