System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Author;
    return {
        setters:[],
        execute: function() {
            Author = (function () {
                function Author(nom, prenom, age) {
                    this.nom = nom;
                    this.prenom = prenom;
                    this.age = age;
                }
                return Author;
            }());
            exports_1("Author", Author);
        }
    }
});
//# sourceMappingURL=author.js.map