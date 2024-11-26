import { Tag } from "./tags";

export interface Project {
    id: number;
    nombre: string;
    resumen: string;
    descripcion: string;
    linkProyecto: string;
    imagenes: string[];
    tags: Tag[];
}