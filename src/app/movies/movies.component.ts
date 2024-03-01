import { Component } from '@angular/core';
import { SearcherComponent } from "../partials/searcher/searcher.component";
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.css',
    imports: [SearcherComponent,RouterModule]
})
export class MoviesComponent {

}
