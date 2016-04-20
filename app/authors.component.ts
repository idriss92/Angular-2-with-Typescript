import { Component } from 'angular2/core';

import { AuthorService } from './author.service';
import { Author } from './models/author';


@Component({
    selector: 'authors',
    template:`
        <h2>Authors</h2>
        {{ title }}
        <ul>
            <li *ngFor="#author of authors">
            {{ author }}
            </li>
        </ul>
        `,
    //styleUrls: ['src/css/authorscomponent.css'],        
    providers: [AuthorService]
})
export class AuthorsComponent{
    title: string="The title of authors page";
    authors: Author[] ;
    errorMessage: string;
    
    constructor(private authorService: AuthorService){
    }
    
    getAuthors(){
                this.authorService.gesApiAuthors()
                                    .subscribe(
                                        authors => this.authors = authors,
                                        error => this.errorMessage = <any> error
                                    );        
    }
    
    ngOnInit(){
        this.getAuthors();
    }
}