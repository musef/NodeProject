// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Peliculas} from '../models/Peliculas';

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-listado',
    templateUrl: 'app/views/peliculas-list.html',
    styleUrls: ["../assets/css/app.css"]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListadoComponent { 

	public pelicula:Peliculas;
	public peliculas:Array<Peliculas>;
	public encabezado:string;
	public showData:boolean;
	public buttonTitle:string;
	

	constructor() {
		this.pelicula=new Peliculas("Puente sobre el río Kwai",1957,"Bélica");
		this.showData=true;
		this.encabezado="Listado de películas";
		this.buttonTitle="Ocultar datos";
		this.peliculas=[
			new Peliculas("Puente sobre el río Kwai",1957,"Bélica"),
			new Peliculas("La muerte tenía un precio",1970,"Western"),
			new Peliculas("Matrix",2005,"Ciencia Ficción")
		];
	}

	onShowHide(showData) {
		if (showData) {
			this.showData=false;
			this.buttonTitle="Mostrar datos";
			} else {
				this.showData=true;
				this.buttonTitle="Ocultar datos";
			}
	}

	onChangeFilm(pelicula){
		this.pelicula=pelicula;
	}

}
