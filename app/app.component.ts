// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Peliculas} from './models/Peliculas';
}
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'app-ang',
    templateUrl: 'app/views/app-template.html',
    styleUrls: ["../assets/css/app.css"]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 

	public pelicula:Peliculas;
	public encabezado="Listado de películas";
	public titulo="Lo que el viento se llevo";
	public fecha=1939;
	public tipo="Romántica";
	constructor() {
		this.pelicula=new Peliculas("Puente sobre el río Kwai",1957,"Bélica");

	}

}