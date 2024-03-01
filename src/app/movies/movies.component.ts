import { Component, OnInit } from '@angular/core';
import { SearcherComponent } from "../partials/searcher/searcher.component";
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearcherService } from '../services/searcher.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.css',
    imports: [SearcherComponent,RouterModule,HttpClientModule,CommonModule]
})
export class MoviesComponent implements OnInit{

    constructor(private searcher:SearcherService){}
    movies: any[]=[];
    ngOnInit(): void {
        
    }
    
    async onMovieSelected(movie: string){
        if(movie.length<=3){ Swal.fire('nombre invalido','el nombre debe tener al menos 3 letras','warning');
    }
        else{
            try{
                const req:any= await this.searcher.getMovies(movie,'movie');
                if(req.Response) this.movies=req.Search;
                //else Swal.fire('Error',req.Error,'error');                
               }catch(e){
                console.log(e);
               }
        }
       

    }
}
