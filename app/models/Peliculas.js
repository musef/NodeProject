System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Peliculas;
    return {
        setters:[],
        execute: function() {
            Peliculas = (function () {
                function Peliculas(titulo, fecha, tipo) {
                    this.titulo = titulo;
                    this.fecha = fecha;
                    this.tipo = tipo;
                }
                return Peliculas;
            }());
            exports_1("Peliculas", Peliculas);
        }
    }
});
//# sourceMappingURL=Peliculas.js.map