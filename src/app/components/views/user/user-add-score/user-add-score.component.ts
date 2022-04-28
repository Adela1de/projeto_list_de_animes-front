import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { anime } from '../../anime/anime.model';
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

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }


  cancel():void
  {
    this.router.navigate(['scores']);
  }
}
