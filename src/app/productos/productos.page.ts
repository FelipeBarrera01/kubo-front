import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/servicios/servicio.service';
import { ProductosLocal } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  url: string = 'http://localhost:5000/'
  productos: ProductosLocal[] = [];
  constructor(private service: ServicioService) { }

  ngOnInit() {
    this.obtenerProductos();
  }
obtenerProductos(){
this.service.obtenerProductos().subscribe(res => {console.log(res); this.productos = res as ProductosLocal[]});

}

anadiralcarrito(producto: ProductosLocal){
  producto.createdAt = null;
  producto.updatedAt = null;
  producto.id = null;
  this.service.guardarCarrito(producto).subscribe(res =>{
    console.log(res);
    alert(res);
  });
}
}
