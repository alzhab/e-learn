import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export type Role = 'student' | 'teacher' | 'admin'

@Injectable()
export class AuthService {
  private activeRole: Role = 'student'

  private cardTextOptions = {
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
    },
    admin: {
      h2: 'Hello Admin',
      p: 'I don’t know how you got to this page, since there are no direct links to it. Do not play with url'
    }
  }

  constructor(private http: HttpClient) { }

  getcardTextOption(role: string) {
    return { ...this.cardTextOptions[role] }
  }

  getActiveRole() {
    return this.activeRole
  }

  setActiveRole(role: Role) {
    this.activeRole = role
  }
}
