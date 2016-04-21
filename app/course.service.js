System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/operator/share', 'rxjs/add/operator/map', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var CourseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            CourseService = (function () {
                function CourseService(http) {
                    var _this = this;
                    this.http = http;
                    this._courseUrl = 'http://0.0.0.0:3000/api/Courses';
                    this._baseUrl = 'http://0.0.0.0:3000/api/Courses';
                    this.course$ = new Observable_1.Observable(function (observer) { return _this._courseObserver = observer; }).share();
                    this._dataStore = { courses: [] };
                }
                CourseService.prototype.loadCourses = function () {
                    var _this = this;
                    this.http.get(this._baseUrl)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) {
                        _this._dataStore.courses = data;
                        _this._courseObserver.next(_this._dataStore.courses);
                    }, function (error) { return console.log('could not load courses'); });
                };
                CourseService.prototype.gesApiCourses = function () {
                    var p = this.http.get(this._courseUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                    return p;
                };
                CourseService.prototype.createTodo = function (course) {
                    var _this = this;
                    this.http.post(this._baseUrl + "/", JSON.stringify(course))
                        .map(function (response) { return response.json(); }).subscribe(function (data) {
                        _this._dataStore.courses.push(data);
                        _this._courseObserver.next(_this._dataStore.courses);
                    }, function (error) { return console.log('Could not create todo.'); });
                };
                CourseService.prototype.updateTodo = function (course) {
                    var _this = this;
                    this.http.put(this._baseUrl + "/" + course.idcourse, JSON.stringify(course))
                        .map(function (response) { return response.json(); }).subscribe(function (data) {
                        _this._dataStore.courses.forEach(function (todo, i) {
                            if (course.idcourse === data.idcourse) {
                                _this._dataStore.courses[i] = data;
                            }
                        });
                        _this._courseObserver.next(_this._dataStore.courses);
                    }, function (error) { return console.log('Could not update todo.'); });
                };
                CourseService.prototype.deleteTodo = function (courseId) {
                    var _this = this;
                    this.http.delete(this._baseUrl + "/" + courseId).subscribe(function (response) {
                        _this._dataStore.courses.forEach(function (t, i) {
                            if (t.idcourse === courseId) {
                                _this._dataStore.courses.splice(i, 1);
                            }
                        });
                        _this._courseObserver.next(_this._dataStore.courses);
                    }, function (error) { return console.log('Could not delete todo.'); });
                };
                CourseService.prototype.handleError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                CourseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CourseService);
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map