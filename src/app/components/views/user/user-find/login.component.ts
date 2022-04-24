import { Component, OnInit } from '@angular/core';
import { user } from '../../user.model';
import { UserService } from '../../user.service';

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

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  login(email: string ,password: string): void
  {
    this.service.login(email, password).subscribe((answer) => {
      console.log(answer);
    })
  }

}
