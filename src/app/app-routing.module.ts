import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeCreateComponent } from './components/views/anime/anime-create/anime-create.component';
import { AnimeDeleteComponent } from './components/views/anime/anime-delete/anime-delete.component';
import { AnimeReadComponent } from './components/views/anime/anime-read/anime-read.component';
import { AnimeUpdateComponent } from './components/views/anime/anime-update/anime-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { UserCreateComponent } from './components/views/user/user-create/user-create.component';
import { UserFindFavoritesComponent } from './components/views/user/user-find-favorites/user-find-favorites.component';
import { LoginComponent } from './components/views/user/user-find/login.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
