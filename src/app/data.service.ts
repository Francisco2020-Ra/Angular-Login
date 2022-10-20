import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado/empleado.model';
import { LoginService } from './login/login.service';


@Injectable()
export class DataService {

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService) { }

    cargarEmpleados() {
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://mis-clientes-9b97e-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token);
    }

    guardarEmpleados(empleados: Empleado[]) {
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://mis-clientes-9b97e-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+token, empleados)
            .subscribe({
                next: (response) => console.log("Se han guardado los empleados: " + response),
                error: (e) => console.error("Error: " + e),

            });
    }

    actualizarEmpleado(indice: number, empleado: Empleado) {
        const token = this.loginService.getIdToken();
        let url = 'https://mis-clientes-9b97e-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json?auth=' + token;

        this.httpClient.put(url, empleado)
            .subscribe({


                next: (response) => console.log("Se ha actualizado el empleados: " + response),
                error: (e) => console.error("Error: " + e),

            });
    }

    eliminarEmpleado(indice: number) {
        const token = this.loginService.getIdToken();
        let url = 'https://mis-clientes-9b97e-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json?auth=' + token;

        this.httpClient.delete(url).subscribe({
            next: (response) => console.log("Se ha eliminado el empleado"),
            error: (e) => console.error("Error: " + e),
        })
    }

}
