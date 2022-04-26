import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { anime } from '../../anime/anime.model';
import { AnimeService } from '../../anime/anime.service';
import { user } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  anime: anime = 
  {
    id: '',
    name: '',
    studio: [],
    genre: [],
    author: ''
  }

  constructor(private service: UserService, private route: ActivatedRoute, private router: Router, private animeService: AnimeService) { }

  ngOnInit(): void {
    this.anime.id = this.route.snapshot.paramMap.get('id')!;
    this.animeService.findById(<string>this.anime.id).subscribe((answer) => {
      this.anime = answer;
    })
  }

  update():void
  {
    this.service.updateFavorites(this.anime).subscribe((answer) => {
      this.router.navigate(['users/favorites'])
    })
  }

}
