import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from './user.model';
import { Observable } from 'rxjs';
import { anime } from './anime/anime.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = environment.baseUrl;
  isLogged: boolean = false;
  user: any; 
  userLogged: user = 
  {
    id: '',
    name: '',
    email: '',
    password: '',
    favorites: []
  };

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  login(email: string, password: string):Observable<user>
  {
    const url = `${this.baseUrl}users/user`
    this.isLogged = true;
    this.user = this.http.post<user>(url, {email, password});

    this.user.subscribe((answer: user) => {
      console.log(answer)
      this.userLogged = answer
    })
    
    return this.user;
  }

  create(name: string, email: string, password: string):Observable<user>
  {
    const url = `${this.baseUrl}users`
    return this.http.post<user>(url, {name, email, password})
  }

  findFavorites():Observable<anime[]>
  {
    console.log(this.userLogged);
    const url = `${this.baseUrl}users/favorites/${this.userLogged.id}`
    return this.http.get<anime[]>(url);
  }

  logOf():void
  {
      this.user = '';
      this.userLogged = 
      {
        id:'',
        name:'',
        email:'',
        password:'',
        favorites:[]
      }
      this.isLogged = false;
  }

  mensagem(str: string):void
  {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000
    })
  }
}
