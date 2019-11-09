import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public navLinks = [
    {
      path: 'sign-in',
      label: 'Sign In'
    },
    {
      path: 'forgot-password',
      label: 'Password'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
