import { Injectable } from 'angular2/core'
import { Http, Response } from 'angular2/http'
import { Author } from './models/author'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx';

@Injectable()
export class AuthorService{
    
    private _authorUrl = '';
    constructor(private http:Http){
        
    }
    
    getAuthors() : string[]{
        return ["Author1","Author2", "Author3"]
    }
    
    gesApiAuthors(){
        return this.http.get(this._authorUrl)
                        .map(res => <Author[]> res.json())
                        .catch(this.handleError);
    }
    
    private handleError(error:Response ){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}