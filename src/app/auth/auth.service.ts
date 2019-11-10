import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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

  getcardTextOption(role: string) {
    return { ...this.cardTextOptions[role] }
  }

  constructor() { }
}
