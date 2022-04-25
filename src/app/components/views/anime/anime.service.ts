import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { anime } from './anime.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

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

  message(str: string):void
  {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000
    })
  }

}
