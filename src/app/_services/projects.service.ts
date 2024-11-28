import { Injectable } from '@angular/core';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, nombre: "Proyecto Final DAW", imagenes: ["./assets/proyecto1/PresentacionHappyPet (3).png","./assets/proyecto1/PresentacionHappyPet (2).png","./assets/proyecto1/PresentacionHappyPet (1).png","./assets/proyecto1/PresentacionHappyPet.png"], linkProyecto: "https://github.com/MarcosSantosGM/ProyectoDaw", resumen: "Aplicación web Fullstack sobre una tienda de mascotas con administración y manejo de productos y usuarios", descripcion: " Trabajo realizado para el Proyecto final del CFGS en Desarrollo de Aplicaciones Web. El proyecto consiste en el desarrollo de una tienda online de mascotas, diseñada para ser utilizada por usuarios de todas las edades. La tienda ofrece una amplia variedad de productos, desde alimentos hasta complementos, y permite a los usuarios registrarse, consultar, comprar y comentar los distintos productos disponibles en el catálogo. Los administradores tienen privilegios adicionales y son responsables de agregar, actualizar y eliminar productos y usuarios.",tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.JAVA, Tag.SPRINGBOOT]},
    {id: 1, nombre: "Portafolio", imagenes: ["./assets/proyecto2/portfolio1.png","./assets/proyecto2/portfolio2.png"], linkProyecto: "https://github.com/MarcosSantosGM/portfolio", resumen: "Mi portafolio, donde enseño mis proyecyos de desarrollo web.", descripcion: "Mi portafolio muestra mi experiencia y habilidades en desarrollo web e ingeniería de software. Incluye proyectos en los que he creado sitios web y aplicaciones dinámicas utilizando tecnologías como JavaScript, HTML, CSS y frameworks como Spring Boot y Angular. Los proyectos destacan mi capacidad para crear soluciones fáciles de usar y trabajar tanto en el front-end como en el back-end de aplicaciones web. Este portafolio refleja mi pasión por la programación y por ofrecer soluciones de software fiables y efectivas.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError("No hay proyectos que coincidan con la id: " + id);
    }
    
    return project;
  }

  GetProjectByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if (project.tags.includes(filterTag) == false){
          foundAll = false;
        }
    });

    if (foundAll){
      filteredProjects.push(project);
    }
    });

    return filteredProjects;
  }
}
