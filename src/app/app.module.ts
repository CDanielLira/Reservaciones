import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetComponent } from './sweet/sweet.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { VideoPipe } from './video.pipe';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './localstorage.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    AboutComponent,
    ReservacionesComponent,
    GaleriaComponent,
    HeaderComponent,
    SweetComponent,
    VideoPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
