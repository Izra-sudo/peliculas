import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'movies', component:MoviesComponent},
  {path:'movies/detail/:id', component:MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
