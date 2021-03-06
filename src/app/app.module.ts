import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { AnimeReadComponent } from './components/views/anime/anime-read/anime-read.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { AnimeCreateComponent } from './components/views/anime/anime-create/anime-create.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './components/views/user/user-find/login.component';
import { UserFindFavoritesComponent } from './components/views/user/user-find-favorites/user-find-favorites.component';
import { UserCreateComponent } from './components/views/user/user-create/user-create.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AnimeDeleteComponent } from './components/views/anime/anime-delete/anime-delete.component';
import { AnimeUpdateComponent } from './components/views/anime/anime-update/anime-update.component';
import { UserUpdateComponent } from './components/views/user/user-update/user-update.component';
import { UserFindScoreComponent } from './components/views/user/user-find-score/user-find-score.component';
import { UserAddScoreComponent } from './components/views/user/user-add-score/user-add-score.component';
import { UserRemoveFavoriteComponent } from './components/views/user/user-remove-favorite/user-remove-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AnimeReadComponent,
    AnimeCreateComponent,
    LoginComponent,
    UserFindFavoritesComponent,
    UserCreateComponent,
    AnimeDeleteComponent,
    AnimeUpdateComponent,
    UserUpdateComponent,
    UserFindScoreComponent,
    UserAddScoreComponent,
    UserRemoveFavoriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
