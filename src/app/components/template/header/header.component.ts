import { Component, OnInit } from '@angular/core';
import { UserService } from '../../views/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.checkIfIsLogged();
  }
  checkIfIsLogged(){
    if(this.userService.isLogged)
    {
      this.logged = true
    }
  }
}
