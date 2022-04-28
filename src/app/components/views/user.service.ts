import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from './user.model';
import { Observable } from 'rxjs';
import { anime } from './anime/anime.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { score } from './score.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = environment.baseUrl;
  isLogged: boolean = false;
  userLogged: user = 
  {
    id: '',
    name: '',
    email: '',
    password: '',
  };
  
  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findById():Observable<user>
  {
    const url = `${this.baseUrl}users/${this.userLogged.id}` 
    return this.http.get<user>(url);
  }

  addFavorite(anime: anime): Observable<user>
  {
    const url = `${this.baseUrl}users/favorites/add/${this.userLogged.id}`
    return this.http.put<user>(url, anime);
  }

  
  login(email: string, password: string):user
    {
    const url = `${this.baseUrl}users/user`
    this.isLogged = true;
    this.http.post<user>(url, {email, password}).subscribe((answer) => {
      this.userLogged = answer;
    })

    return this.userLogged;
  }

  create(name: string, email: string, password: string):Observable<user>
  {
    const url = `${this.baseUrl}users`
    return this.http.post<user>(url, {name, email, password})
  }

  findFavorites():Observable<anime[]>
  {
    const url = `${this.baseUrl}users/favorites/${this.userLogged.id}`
    return this.http.get<anime[]>(url);
  }

  findScores():Observable<score[]>
  {
    const url = `${this.baseUrl}scores/user/${this.userLogged.id}`
    return this.http.get<score[]>(url);
  }

  logOf():void
  {
      this.userLogged = 
      {
        id:'',
        name:'',
        email:'',
        password:'',
        favorites:[] = []
      }
      this.isLogged = false;
  }
  
  message(str: string):void
  {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000
    })
  }
}
