import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { anime } from '../../anime/anime.model';
import { AnimeService } from '../../anime/anime.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-add-score',
  templateUrl: './user-add-score.component.html',
  styleUrls: ['./user-add-score.component.css']
})
export class UserAddScoreComponent implements OnInit {

  anime: anime =
  {
    name: '',
    studio: [] = [],
    genre: [] = [],
    author: ''
  }

  entry: string = ''

  constructor(private service: UserService, private animeService: AnimeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.anime.id = this.route.snapshot.paramMap.get('id')!;
    this.findById()
  }

  findById():void
  {
    this.animeService.findById(<string>this.anime.id).subscribe((answer) => {
      this.anime = answer
    })
  }

  createScore():void
  {
    this.service.createScore(this.anime, this.entry).subscribe((answer) => {
      this.router.navigate(['scores'])
    })
  }
  cancel():void
  {
    this.router.navigate(['animes'])
  }
}
