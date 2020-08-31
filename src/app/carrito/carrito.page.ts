import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/servicios/servicio.service';
import { Carritos, Subtotales, Compras, Ids } from 'src/interfaces/interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carritos: Carritos[] = [];
  subTotales: Subtotales[] = [];
  numeroOrden: number;
  url: string = 'http://localhost:5000/';
  total: number = 0;
  constructor(private service: ServicioService, private router: Router) { }

  ngOnInit() {
    this.generarNumeroOrden();
    this.obtenerCarrito();
  }
  generarNumeroOrden() {
    this.numeroOrden = Number(Math.random().toString().substring(2));
  }
  obtenerCarrito() {
    this.service.obtenerCarrito().subscribe(res => {
      this.carritos = res as Carritos[];
      this.calcularTotal();
    });
  }
  aumentarCantidad(id: number) {
    this.carritos.forEach(iter => {
      if (id === iter.id) {
        iter.cantidad = iter.cantidad + 1;
        this.calcularTotal(iter.id);
      }
    });
  }
  restarCantidad(id: number) {
    this.carritos.forEach(iter => {
      if (id === iter.id) {
        if (iter.cantidad !== 1) {
          iter.cantidad = iter.cantidad - 1;
          this.calcularTotal(iter.id);
        }

      }
    });

  }
  calcularTotal(id?: number) {
    let totalAux: number = 0;

    if (id) {
      for (let index = 0; index < this.subTotales.length; index++) {

        if (this.subTotales[index].id === id) {
          this.carritos.forEach(iter => {
            if (iter.id === id) {
              this.subTotales[index].subTotal = iter.precio * iter.cantidad;
            }

          });
        }
      }

    } else {
      this.carritos.forEach(iter => {
        let subTotal: Subtotales = {};
        subTotal.id = iter.id;
        subTotal.subTotal = iter.precio * iter.cantidad;
        this.subTotales.push(subTotal);

      });
    }

    this.subTotales.forEach(iter => {
      totalAux += iter.subTotal;
    });
    this.total = totalAux;
  }
  registrarOrden() {

    let compras: Compras[] = [];

    this.carritos.forEach(iter => {
      let compra: Compras = {};
      compra.orden = this.numeroOrden.toString();
      compra.imagen = iter.imagen;
      compra.nombre = iter.nombre;
      compra.categoria = iter.categoria;
      compra.descripcion = iter.descripcion;
      compra.cantidad = iter.cantidad;
      compra.precio = iter.precio;
      compra.total = this.total;
      compras.push(compra);
    });
    let ids: Ids[] = [];
    this.subTotales.forEach(iter => {
      let id: Ids = {};
      id.id = iter.id;
      ids.push(id);
    });
    this.service.guardarCompra(compras).subscribe(res => {
      alert(res);
      this.service.borrarCarrito(ids).subscribe(ress => {
        console.log(ress);
        this.carritos = [];
        this.router.navigate(['/']);
      });
    });
  }
}
