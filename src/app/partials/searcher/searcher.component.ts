import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-searcher',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.css'
})
export class SearcherComponent implements OnInit{
constructor(){}
@Output() movieSelected= new EventEmitter<string>();
name: string='';

ngOnInit(): void {
  
}
selectMovie(){
  this.movieSelected.emit(this.name);
}
}
