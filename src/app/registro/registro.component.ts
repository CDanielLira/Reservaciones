import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nombre: string = "";
  correo: string = "";
  tel: string = "";
  fecha: string = "";
  habitacion: string = "";

  constructor() { }



guardarRegistro() {
  const registro = {
    nombre: this.nombre,
    correo: this.correo,
    tel: this.tel,
    fecha: this.fecha,
    habitacion: this.habitacion
  };
  let registros: any[] = JSON.parse(localStorage.getItem('registros') || '[]');
  registros.push(registro);
  localStorage.setItem('registros', JSON.stringify(registros));

  Swal.fire({
    icon: 'success',
    title: '¡Registro guardado!',
    showConfirmButton: false,
    timer: 1500
  });
}


}
