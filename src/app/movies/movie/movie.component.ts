import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearcherService } from '../../services/searcher.service';
import { Movie } from '../../models/movie.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{
constructor(private activatedRoute:ActivatedRoute, private searcher:SearcherService){ }
movie: Movie= new Movie;
async ngOnInit() {
  try {
    const req: any = await this.searcher.getMovie(this.activatedRoute.snapshot.params['id'])
    if (req.Response) {
      console.log(req);
      this.movie=req;
    }
  } catch (e) {
    console.log(e);
  }
}
}
