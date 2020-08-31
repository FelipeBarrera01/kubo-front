import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/interfaces/interfaces';
import { ServicioService } from 'src/servicios/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-dispositivos',
  templateUrl: './form-dispositivos.page.html',
  styleUrls: ['./form-dispositivos.page.scss'],
})
export class FormDispositivosPage implements OnInit {

  producto: Productos = {};
  photoSelected: ArrayBuffer | string;
  mensaje: string;
  constructor(private servicio: ServicioService, private router: Router) { }

  ngOnInit() {
  }

  guardarProducto() {

    let formData = new FormData();
    formData.append('nombre', this.producto.nombre);
    formData.append('categoria', this.producto.categoria);
    formData.append('imagen', this.producto.imagen);
    formData.append('descripcion', this.producto.descripcion);
    formData.append('precio', this.producto.precio.toString());
    this.servicio.subirProducto(formData).subscribe(res => {
      console.log(res);
      this.mensaje = 'Producto guardado con exito';
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
    });
  }
  seleccionarImagen(event: any) {
    this.producto.imagen = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.photoSelected = reader.result;
    reader.readAsDataURL(this.producto.imagen);
  }
  vaciar() {
    this.producto = {};
    this.mensaje = '';
  }
}
