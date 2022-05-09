import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { anime } from '../../anime/anime.model';
import { AnimeService } from '../../anime/anime.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-remove-favorite',
  templateUrl: './user-remove-favorite.component.html',
  styleUrls: ['./user-remove-favorite.component.css']
})
export class UserRemoveFavoriteComponent implements OnInit {

  anime: anime = 
  {
    id: '',
    name: '',
    studio: [],
    genre: [],
    author: ''
  }

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute, private animeService: AnimeService) { }

  ngOnInit(): void {
    this.anime.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  removeFavorite():void
  {
    this.service.removeFavorite(this.anime).subscribe((answer) => {
      this.service.message("Anime succefully removed from favorites!")
      this.router.navigate([''])
    })
  }

  cancel():void
  {
    this.router.navigate(['']);
  }

  findById():void 
  {
    this.animeService.findById(<string>this.anime.id).subscribe((answer) => {
      this.anime = answer;
    })
  }

}
