import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

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

  create(name: string, email: string, password: string):void
  {
    this.service.create(name, email, password).subscribe((answer) => {
      this.service.message('successfully registered!');
      this.router.navigate(['']);
    })
  }

}
