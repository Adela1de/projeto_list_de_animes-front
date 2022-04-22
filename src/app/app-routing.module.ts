import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeReadComponent } from './components/views/anime/anime-read/anime-read.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'animes',
    component: AnimeReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
