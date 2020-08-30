
export interface Productos{
    id?: number;
    nombre?: string;
    categoria?: string;
    imagen?: File;
    descripcion?: string;
    precio?: number;
    updatedAt?: string;
    createdAt?: string;
}

export interface ProductosLocal{
    id?: number;
    nombre?: string;
    categoria?: string;
    imagen?: string;
    descripcion?: string;
    precio?: number;
    updatedAt?: string;
    createdAt?: string;
}
export interface Carritos{
    id?: number;
    nombre?: string;
    categoria?: string;
    imagen?: string;
    descripcion?: string;
    precio?: number;
    updatedAt?: string;
    createdAt?: string;
}