import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from '../anime.service';
import { anime } from '../anime.model';

@Component({
  selector: 'app-anime-update',
  templateUrl: './anime-update.component.html',
  styleUrls: ['./anime-update.component.css']
})
export class AnimeUpdateComponent implements OnInit {

  anime: anime =
  {
    id: '',
    name: '',
    studio: [],
    genre: [],
    author: ''
  }

  constructor(private service: AnimeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.anime.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById():void
  {
    this.service.findById(<string>this.anime.id).subscribe((answer) => {
      console.log(answer)
      this.anime = answer;
    })
  }

  update():void
  {
    this.service.update(this.anime).subscribe((answer) => {
      this.anime = answer;
      this.router.navigate(['animes'])
    })
  }

  cancel():void
  {
    this.router.navigate(['animes'])
  }
}
