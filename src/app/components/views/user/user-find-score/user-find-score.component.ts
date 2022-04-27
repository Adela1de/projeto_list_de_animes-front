import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { anime } from '../../anime/anime.model';
import { score } from '../../score.model';
import { user } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-find-score',
  templateUrl: './user-find-score.component.html',
  styleUrls: ['./user-find-score.component.css']
})
export class UserFindScoreComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'studio', 'genre', 'author', 'entrys'];

  scores: score[] = []

  constructor(private service: UserService, private router: Router) { }
  


  ngOnInit(): void {
    this.isLogged();
  }

  isLogged():void
  {
    if(this.service.isLogged) 
    {
        this.service.findScores().subscribe((answer) => {
          console.log(answer)
          
        })
    }
    else 
    {
      this.service.message('You need to be logged to see scores!')
      this.router.navigate(['']);
    }
  }
}
