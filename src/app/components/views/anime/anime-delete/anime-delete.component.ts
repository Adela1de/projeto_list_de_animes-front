import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { anime } from '../anime.model';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-delete',
  templateUrl: './anime-delete.component.html',
  styleUrls: ['./anime-delete.component.css']
})
export class AnimeDeleteComponent implements OnInit {

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
    this.anime.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById():void
  {
    this.service.findById(<string>this.anime.id).subscribe((answer) => {
      console.log(answer)
      this.anime = answer;
    })
  }

  delete():void
  {
    this.service.delete(<string>this.anime.id).subscribe((answer) => {
      this.router.navigate(['animes'])
    })
  }

  cancel():void
  {
    this.router.navigate(['animes'])
  }

}
