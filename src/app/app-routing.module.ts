import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeCreateComponent } from './components/views/anime/anime-create/anime-create.component';
import { AnimeDeleteComponent } from './components/views/anime/anime-delete/anime-delete.component';
import { AnimeReadComponent } from './components/views/anime/anime-read/anime-read.component';
import { AnimeUpdateComponent } from './components/views/anime/anime-update/anime-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { UserCreateComponent } from './components/views/user/user-create/user-create.component';
import { UserFindFavoritesComponent } from './components/views/user/user-find-favorites/user-find-favorites.component';
import { UserFindScoreComponent } from './components/views/user/user-find-score/user-find-score.component';
import { LoginComponent } from './components/views/user/user-find/login.component';
import { UserUpdateComponent } from './components/views/user/user-update/user-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'animes',
    component: AnimeReadComponent
  },
  {
    path: 'users',
    component: LoginComponent
  },
  {
    path: 'animes/create',
    component: AnimeCreateComponent
  },
  {
    path: 'users/favorites',
    component: UserFindFavoritesComponent
  },
  {
    path: 'users/create',
    component: UserCreateComponent
  },
  {
    path: 'animes/delete/:id',
    component: AnimeDeleteComponent
  },
  {
    path: 'animes/update/:id',
    component: AnimeUpdateComponent
  },
  {
    path: 'animes/favorites/:id',
    component: UserUpdateComponent
  },
  {
    path: 'scores',
    component: UserFindScoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
