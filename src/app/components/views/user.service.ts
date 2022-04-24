import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from './user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = environment.baseUrl;
  isLogged: boolean = false;
  constructor(private http: HttpClient) { }

  login(email: string, password: string):Observable<user>
  {
    const url = `${this.baseUrl}users/user`
    this.isLogged = true;
    return this.http.post<user>(url, {email, password});
  }
}
