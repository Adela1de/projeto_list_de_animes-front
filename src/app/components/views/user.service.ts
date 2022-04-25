import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from './user.model';
import { Observable } from 'rxjs';
import { anime } from './anime/anime.model';


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

  constructor(private http: HttpClient) { }

  login(email: string, password: string):Observable<user>
  {
    const url = `${this.baseUrl}users/user`
    this.isLogged = true;
    this.user = this.http.post<user>(url, {email, password})
    return this.user;
  }

  findAll():Observable<anime[]>
  {
    this.user.subscribe((answer: user) => {
      console.log(answer)
      this.userLogged = answer
    })
    console.log(this.userLogged);
    const url = `${this.baseUrl}users/favorites/${this.userLogged.id}`
    return this.http.get<anime[]>(url);
  }
}
