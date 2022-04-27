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
    password: ''
  }

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(email: string, password: string): void
  {
    if(!this.service.isLogged)
    {
      this.user = this.service.login(email, password)
      console.log(this.user)
      if(this.user == null){ this.service.message('Invalid user or password'); }
      else
      {
        this.service.message('You are now logged in');
        this.router.navigate([''])
      }
    }
    else
    {
      this.service.message('You are already logged in! as: ' + this.user.name);
      this.router.navigate([""])
    }
  }

  logOf():void
  {
    this.service.logOf();
  }

}
