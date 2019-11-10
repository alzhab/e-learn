import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public activeRole: string
  public cardText

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.changeRole('student')
  }

  changeRole(role: string) {
    this.activeRole = role
    this.cardText = this.authService.getcardTextOption(role)
  }

}
