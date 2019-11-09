import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public navLinks = [
    {
      role: 'student',
      label: 'Student'
    },
    {
      role: 'teacher',
      label: 'Teacher'
    }
  ]

  public role: string

  public cardText
  public cardTextOptions = {
    default: {
      h2: 'Choose role',
      p: 'I don’t know how you got to this page, since there are no direct links to it. Do not play with url'
    },
    student: {
      h2: 'Hello Student',
      p: 'I don’t know how you got to this page, since there are no direct links to it. Do not play with url'
    },
    teacher: {
      h2: 'Hello Teacher',
      p: 'I don’t know how you got to this page, since there are no direct links to it. Do not play with url'
    }
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((data: Params) => {
      this.role = data.params.role

      if (this.role == 'student') {
        this.cardText = 'student'
      } else if (this.role == 'teacher') {
        this.cardText = 'teacher'
      } else if (!this.role) {
        this.cardText = 'default'
      }
    })
  }

}
