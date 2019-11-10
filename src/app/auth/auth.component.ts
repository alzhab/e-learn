import { Component, OnInit } from '@angular/core';
import { AuthService, Role } from './share/services/auth.service';

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

  changeRole(role: Role) {
    this.activeRole = role
    this.authService.setActiveRole(role)
    this.cardText = this.authService.getcardTextOption(role)
  }

}
