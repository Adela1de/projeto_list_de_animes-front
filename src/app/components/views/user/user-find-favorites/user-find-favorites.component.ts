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

    this.checkIfIsLogged()
  }

  findFavorites():void
  {
    this.service.findFavorites().subscribe(answer => {
      
      if(answer[0] == null) 
      {
        this.service.message("You don't have any favorited anime");
        this.router.navigate([''])
      }
      else
      {
        this.favorites = answer;
      }
    })

  }

  checkIfIsLogged():void
  {
    if(this.service.isLogged){ this.findFavorites() }
    else 
    {      
      this.service.message("You need to be logged to see favorited animes");
      this.router.navigate([""]) 
    } 
  }

}
