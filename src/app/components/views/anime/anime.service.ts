import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { anime } from './anime.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<anime[]>
  {
    const url = `${this.baseUrl}animes`
    return this.http.get<anime[]>(url);

  }

  create(anime: anime):Observable<anime>
  {
    const url = `${this.baseUrl}animes`
    return this.http.post<anime>(url, anime);

  }

}
