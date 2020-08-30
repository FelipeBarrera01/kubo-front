import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/servicios/servicio.service';
import { Carritos } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carritos: Carritos[] = [];
  numeroOrden: number;
  constructor(private service: ServicioService) { }

  ngOnInit() {
    this.generarNumeroOrden();
    this.obtenerCarrito();
  }
  generarNumeroOrden() {
    this.numeroOrden = Number(Math.random().toString().substring(2));
  }
  obtenerCarrito() {
    this.service.obtenerCarrito().subscribe(res => 
      { 
        this.carritos = res as Carritos[];
        console.log(this.carritos);
      });
  }
}
