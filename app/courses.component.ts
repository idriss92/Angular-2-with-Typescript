import { Component } from 'angular2/core';

import { CourseService } from './course.service';
import {FormBuilder, Validators, ControlGroup} from 'angular2/common';
import { AutoGrowDirective } from './auto-grow.directive';
import { Course } from './models/course';
import { Observable } from 'rxjs/Observable'


@Component({
    selector: 'courses',
    template:`
        <h2>Courses</h2>
        {{ title }}
        <div>

        </div>
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#course of courses | async">
            {{ course.title }} sur {{ course.km }} km
            </li>
        </ul>
        `,
    //styleUrls: ['src/css/coursescomponent.css'],        
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent{
    errorMessage: string;
    title: string="The title of courses page";
    courses: Observable<Course[]> ;
    
    constructor(
        private courseService: CourseService,
        private formBuilder: FormBuilder){
            
    }
    
    ngOnInit() {
        this.courses = this.courseService.course$;
        this.courseService.loadCourses();
        //this.getCourses();
    }
    
    /*getCourses(): void {
                this.courseService.gesApiCourses()
                                    .subscribe(
                                        Courses => this.courses = Courses,
                                        error => this.errorMessage = <any> error 
                                    );                                 
    }*/
  onSubmit() {
    //this.courseService.createTodo({ value: this.todoForm.controls.todo.value });
  }
  
  deleteTodo(todoId: number) {
    this.courseService.deleteTodo(todoId);
  }
}