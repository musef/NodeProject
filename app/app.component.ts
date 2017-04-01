// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {PeliculasListadoComponent} from './components/peliculas-listado.component';
import {PeliculasFooterComponent} from './components/peliculas-footer.component';

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'app-ang',
    templateUrl: 'app/views/app-template.html',
	directives: [PeliculasListadoComponent,PeliculasFooterComponent],
    styleUrls: ["../assets/css/app.css"]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 

}