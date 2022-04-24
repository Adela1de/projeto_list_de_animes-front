import { Component, OnInit } from '@angular/core';
import { user } from '../user.model';

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

  constructor() { }

  ngOnInit(): void {
  }

}
