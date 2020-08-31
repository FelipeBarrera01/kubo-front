import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductosLocal , Carritos, Compras, Subtotales, Ids} from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private urlEndPoint: string = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  subirProducto(formulario: FormData) {

    return this.http.post<any>(this.urlEndPoint + 'productos', formulario);
  }
  obtenerProductos(){
    return this.http.get<ProductosLocal>(this.urlEndPoint + 'productos');
  }

  guardarCarrito(producto: ProductosLocal){
    return this.http.post<any>(this.urlEndPoint + 'carrito' , producto);
  }
  obtenerCarrito(){
    return this.http.get<Carritos[]>(this.urlEndPoint + 'carritos');
  }
  guardarCompra(compras: Compras[]){
    return this.http.post<any>(this.urlEndPoint + 'compras', compras);
  }
  borrarCarrito(ids: Ids[]){
    return this.http.post<any>(this.urlEndPoint + 'borrar-carrito', ids);
  }
  filtro(term: string){
    return this.http.get<ProductosLocal>(this.urlEndPoint + 'productos/' + term);
  }
}
