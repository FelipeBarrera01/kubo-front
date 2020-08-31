
export interface Productos {
    id?: number;
    nombre?: string;
    categoria?: string;
    imagen?: File;
    descripcion?: string;
    precio?: number;
    updatedAt?: string;
    createdAt?: string;
}

export interface ProductosLocal {
    id?: number;
    nombre?: string;
    categoria?: string;
    imagen?: string;
    descripcion?: string;
    precio?: number;
    updatedAt?: string;
    createdAt?: string;
}
export interface Carritos {
    id?: number;
    nombre?: string;
    categoria?: string;
    imagen?: string;
    descripcion?: string;
    cantidad?: number;
    precio?: number;
    updatedAt?: string;
    createdAt?: string;
}
export interface Subtotales {
    id?: number;
    subTotal?: number;
}

export interface Compras {
    orden?: string;
    imagen?: string;
    nombre?: string;
    categoria?: string;
    descripcion?: string;
    precio?: number;
    cantidad?: number;
    total?: number;
}
export interface Ids{
    id?: number;
}