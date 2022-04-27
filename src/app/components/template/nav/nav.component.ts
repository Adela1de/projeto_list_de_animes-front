import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../../views/user.model';
import { UserService } from '../../views/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

}
