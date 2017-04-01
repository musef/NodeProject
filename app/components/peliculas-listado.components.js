System.register(['angular2/core', '../models/Peliculas'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Peliculas_1;
    var PeliculasListadoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Peliculas_1_1) {
                Peliculas_1 = Peliculas_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            PeliculasListadoComponent = (function () {
                function PeliculasListadoComponent() {
                    this.pelicula = new Peliculas_1.Peliculas("Puente sobre el río Kwai", 1957, "Bélica");
                    this.showData = true;
                    this.encabezado = "Listado de películas";
                    this.buttonTitle = "Ocultar datos";
                    this.peliculas = [
                        new Peliculas_1.Peliculas("Puente sobre el río Kwai", 1957, "Bélica"),
                        new Peliculas_1.Peliculas("La muerte tenía un precio", 1970, "Western"),
                        new Peliculas_1.Peliculas("Matrix", 2005, "Ciencia Ficción")
                    ];
                }
                PeliculasListadoComponent.prototype.onShowHide = function (showData) {
                    if (showData) {
                        this.showData = false;
                        this.buttonTitle = "Mostrar datos";
                    }
                    else {
                        this.showData = true;
                        this.buttonTitle = "Ocultar datos";
                    }
                };
                PeliculasListadoComponent = __decorate([
                    core_1.Component({
                        selector: 'peliculas-listado',
                        templateUrl: 'app/views/peliculas-list.html',
                        styleUrls: ["../assets/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PeliculasListadoComponent);
                return PeliculasListadoComponent;
            }());
            exports_1("PeliculasListadoComponent", PeliculasListadoComponent);
        }
    }
});
//# sourceMappingURL=peliculas-listado.components.js.map