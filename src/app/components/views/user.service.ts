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
  userLogged: any;
  constructor(private http: HttpClient) { }

  login(email: string, password: string):Observable<user>
  {
    const url = `${this.baseUrl}users/user`
    this.isLogged = true;
    this.userLogged = this.http.post<user>(url, {email, password})
    return this.userLogged;
  }

  findAll():Observable<anime[]>
  {
    console.log(this.userLogged.id)
    const url = `${this.baseUrl}users/favorites/${this.userLogged.id}`
    return this.http.get<anime[]>(url);
  }
}
