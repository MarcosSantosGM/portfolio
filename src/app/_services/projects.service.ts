import { Injectable } from '@angular/core';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, nombre: "Proyecto Final DAW", imagenes: ["../../assets/proyecto1/PresentacionHappyPet (3).png","../../assets/proyecto1/PresentacionHappyPet (2).png","../../assets/proyecto1/PresentacionHappyPet (1).png","../../assets/proyecto1/PresentacionHappyPet.png"], linkProyecto: "https://github.com/MarcosSantosGM/ProyectoDaw", resumen: "Fullstack web app about pet store with product and user management", descripcion: " Trabajo realizado para el Proyecto final del CFGS en Desarrollo de Aplicaciones Web. El proyecto consiste en el desarrollo de una tienda online de mascotas, diseñada para ser utilizada por usuarios de todas las edades. La tienda ofrece una amplia variedad de productos, desde alimentos hasta complementos, y permite a los usuarios registrarse, consultar, comprar y comentar los distintos productos disponibles en el catálogo. Los administradores tienen privilegios adicionales y son responsables de agregar, actualizar y eliminar productos y usuarios.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.JAVA, Tag.SPRINGBOOT]},
    {id: 1, nombre: "Portfolio", imagenes: ["../../assets/proyecto2/portfolio1.png","../../assets/proyecto2/portfolio2.png"], linkProyecto: "https://github.com/MarcosSantosGM/portfolio", resumen: "My portfolio showcases projects in web development and software engineering.", descripcion: "My portfolio showcases my experience and skills in web development and software engineering. It includes projects where I have built dynamic websites and applications using technologies like JavaScript, HTML, CSS, and frameworks such as Spring Boot and Angular.The projects highlight my ability to create user-friendly solutions and work on both the front-end and back-end of web applications. This portfolio reflects my passion for coding and delivering reliable and effective software solutions.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    //{id: 2, nombre: "Sample .Net App", imagenes: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], linkProyecto: "//www.github.com", resumen: "Fullstack web app developed using React and ASP.NET", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR ,Tag.TYPESCRIPT, Tag.JAVA]},
   // {id: 3, nombre: "Web API Project", imagenes: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], linkProyecto: "//www.github.com", resumen: "Web API Project that was developed for a class project.", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.JAVA]},
    //{id: 4, nombre: "Chrome Extension", imagenes: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], linkProyecto: "//www.github.com", resumen: "Developed a chrome extension that tracks the prices of furniture.", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT]},
    //{id: 5, nombre: "Mobile App", imagenes: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], linkProyecto: "//www.github.com", resumen: "Mobile app developed in java that tracks the departure and arrival of trains.", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA]}
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError("There is no project that matches the id: " + id);
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
