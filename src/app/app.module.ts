import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicaEmpleadoCComponent } from './caracteristica-empleado-c/caracteristica-empleado-c.component';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { LoginComponent } from './login/login.component';


import { DataService } from './data.service';
import { EmpleadoService } from './empleado.service';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';

const appRoutes: Routes = [

  { path: '', component: HomeComponentComponent },
  { path: 'proyectos', component: ProyectosComponentComponent },
  { path: 'quienes', component: QuienesComponentComponent },
  { path: 'contacto', component: ContactoComponentComponent },
  { path: 'actualiza/:id', component: ActualizaComponentComponent },
  { path: "login", component: LoginComponent },
  { path: '**', component: ErrorPersonalizadoComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    EmpleadoHijoCComponent,
    CaracteristicaEmpleadoCComponent,
    ActualizaComponentComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ErrorPersonalizadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioEmpleadoService, EmpleadoService, DataService, LoginService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
