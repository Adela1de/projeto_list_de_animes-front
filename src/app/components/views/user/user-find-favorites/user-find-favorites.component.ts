import { Component, OnInit } from '@angular/core';
import { anime } from '../../anime/anime.model';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-find-favorites',
  templateUrl: './user-find-favorites.component.html',
  styleUrls: ['./user-find-favorites.component.css']
})
export class UserFindFavoritesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'studio', 'genre', 'author', 'acoes'];

  favorites: anime[]= [] 


  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll():void
  {
    this.service.findAll().subscribe(answer => {
      console.log(answer);
      this.favorites = answer;
    })
  }

}
