import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-read',
  templateUrl: './anime-read.component.html',
  styleUrls: ['./anime-read.component.css']
})
export class AnimeReadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
  displayedColumns: string[] = ['id', 'name', 'studio', 'genre', 'author'];

}
