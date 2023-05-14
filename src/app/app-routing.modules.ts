import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'reservaciones', component: ReservacionesComponent },
    { path: 'galeria', component: GaleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }