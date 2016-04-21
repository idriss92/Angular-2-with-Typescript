import { Injectable } from 'angular2/core'
import { Http, Response } from 'angular2/http'
import { Course } from './models/course'
import { Observable } from 'rxjs/Observable'
import {Observer} from 'rxjs/Observer'
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class CourseService{
    
    course$: Observable<Course[]>;
    private _baseUrl: string;
    private _courseObserver: Observer<Course[]>;
    private _dataStore: {
        courses: Course[]
    };
    
    private _courseUrl = 'http://0.0.0.0:3000/api/Courses';
    constructor(private http: Http){
        this._baseUrl = 'http://0.0.0.0:3000/api/Courses';
        this.course$ = new Observable(observer => this._courseObserver = observer).share();
        this._dataStore = { courses: []};
    }
    
    loadCourses(){
        this.http.get(this._baseUrl)
                    .map(response => response.json())
                    .subscribe(
                        data => {
                            this._dataStore.courses = data;
                            this._courseObserver.next(this._dataStore.courses);
                        }, error => console.log('could not load courses')
                    );
    }
    gesApiCourses(){
        let p =  this.http.get(this._courseUrl)
                        .map(res => <Course[]> res.json())
                        .catch(this.handleError);
                        return p;
    }


    
    createTodo(course: Course) {
        this.http.post(`${this._baseUrl}/`, JSON.stringify(course))
            .map(response => response.json()).subscribe(data => {
            this._dataStore.courses.push(data);   
            this._courseObserver.next(this._dataStore.courses);
        }, error => console.log('Could not create todo.'));
    }
     
    updateTodo(course: Course) {
        this.http.put(`${this._baseUrl}/${course.idcourse}`, JSON.stringify(course))
            .map(response => response.json()).subscribe(data => {
            this._dataStore.courses.forEach((todo, i) => {
                if (course.idcourse === data.idcourse) { this._dataStore.courses[i] = data; }
            });
     
            this._courseObserver.next(this._dataStore.courses);
        }, error => console.log('Could not update todo.'));
    }
     
    deleteTodo(courseId: number) {
        this.http.delete(`${this._baseUrl}/${courseId}`).subscribe(response => {
            this._dataStore.courses.forEach((t, i) => {
                if (t.idcourse === courseId) { this._dataStore.courses.splice(i, 1); }
            });
     
            this._courseObserver.next(this._dataStore.courses);
        }, error => console.log('Could not delete todo.'));
    }

    private handleError(error:Response ){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}