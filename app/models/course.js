System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Course;
    return {
        setters:[],
        execute: function() {
            Course = (function () {
                function Course(title, km, participants) {
                    this.title = title;
                    this.km = km;
                    this.participants = participants;
                }
                return Course;
            }());
            exports_1("Course", Course);
        }
    }
});
//# sourceMappingURL=course.js.map