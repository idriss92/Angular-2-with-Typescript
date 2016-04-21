System.register(['angular2/core', './course.service', 'angular2/common', './auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, course_service_1, common_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService, formBuilder) {
                    this.courseService = courseService;
                    this.formBuilder = formBuilder;
                    this.title = "The title of courses page";
                }
                CoursesComponent.prototype.ngOnInit = function () {
                    this.courses = this.courseService.course$;
                    this.courseService.loadCourses();
                    //this.getCourses();
                };
                /*getCourses(): void {
                            this.courseService.gesApiCourses()
                                                .subscribe(
                                                    Courses => this.courses = Courses,
                                                    error => this.errorMessage = <any> error
                                                );
                }*/
                CoursesComponent.prototype.onSubmit = function () {
                    //this.courseService.createTodo({ value: this.todoForm.controls.todo.value });
                };
                CoursesComponent.prototype.deleteTodo = function (todoId) {
                    this.courseService.deleteTodo(todoId);
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n        <h2>Courses</h2>\n        {{ title }}\n        <div>\n\n        </div>\n        <input type=\"text\" autoGrow />\n        <ul>\n            <li *ngFor=\"#course of courses | async\">\n            {{ course.title }} sur {{ course.km }} km\n            </li>\n        </ul>\n        ",
                        //styleUrls: ['src/css/coursescomponent.css'],        
                        providers: [course_service_1.CourseService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService, common_1.FormBuilder])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map