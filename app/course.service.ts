import { Injectable } from 'angular2/core'
import { Http, Response } from 'angular2/http'
import { Course } from './models/course'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx';

@Injectable()
export class CourseService{
    
    private _courseUrl = '';
    constructor(private http:Http){
        
    }
    
    gesApiCourses(){
        return this.http.get(this._courseUrl)
                        .map(res => <Course[]> res.json())
                        .catch(this.handleError);
    }
    
    getCourses() : string[]{
        return ["course1","course2", "course3"]
    }
    
    private handleError(error:Response ){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}