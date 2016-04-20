import { Component } from 'angular2/core';

import { CourseService } from './course.service';

import { AutoGrowDirective } from './auto-grow.directive';
import { Course } from './models/course';

@Component({
    selector: 'courses',
    template:`
        <h2>Courses</h2>
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#course of courses">
            {{ course }}
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
    courses: Course [] ;
    
    constructor(private courseService: CourseService){
    }
    
    ngOnInit(){
        this.getCourses();
    }
    
    getCourses(){
                this.courseService.gesApiCourses()
                                    .subscribe(
                                        courses => this.courses = courses,
                                        error => this.errorMessage = <any> error
                                    );
    }
}