import { Component, OnInit } from '@angular/core';
import { user } from '../../user.model';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: user=
  {
    name: '',
    email: '',
    password: '',
    favorites: []
  }

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(email: string, password: string): void
  {
    if(!this.service.isLogged)
    {
      this.service.login(email, password).subscribe((answer) => {
        console.log(answer);
        this.user = answer;
      })
    }
    else
    {
      this.router.navigate([""])
    }
  }

  logOf():void
  {
    this.service.logOf();
  }

}
