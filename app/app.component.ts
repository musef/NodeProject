// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {PeliculasListadoComponent} from './components/peliculas-listado.component';
import {PeliculasFooterComponent} from './components/peliculas-footer.component';
import {ContactoComponent} from './components/contacto.component';
import {CrearPeliculaComponent} from './components/crear-pelicula.component';

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'app-ang',
    templateUrl: 'app/views/app-template.html',
	directives: [PeliculasListadoComponent,PeliculasFooterComponent, ContactoComponent, CrearPeliculaComponent, ROUTER_DIRECTIVES],
    styleUrls: ["../assets/css/app.css"]
})
 
@RouteConfig ([
	{path:"/peliculas", name: "Peliculas", component: PeliculasListadoComponent, useAsDefault: true},
	{path:"/contacto", name: "Contacto", component: ContactoComponent},
	{path:"/crear-peliculas", name: "CrearPeliculas", component: CrearPeliculaComponent}
])
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 

}