import { Injectable } from '@angular/core';
import { Message } from '../models/Message';

@Injectable()
export class MessagesService {

  private messages: Message[] = [
    {
      text: 'Hey dude ! What’s the plan ?',
      date: '2 hours age',
      user: {
        avatar: 'avatar.png',
        name: 'Jason Bourne'
      },
      notReaded: true
    },
    {
      text: 'Hey dude ! What’s the plan ?',
      date: '2 hours age',
      user: {
        avatar: 'avatar.png',
        name: 'Jason Bourne'
      },
      notReaded: true
    },
    {
      text: 'Hey dude ! What’s the plan ?',
      date: '2 hours age',
      user: {
        avatar: 'avatar.png',
        name: 'Jason Bourne'
      },
      notReaded: true
    },
    {
      text: 'Hey dude ! What’s the plan ?',
      date: '2 hours age',
      user: {
        avatar: 'avatar.png',
        name: 'Jason Bourne'
      },
      notReaded: false
    }
  ]

  constructor() { }

  getMessages() {
    return [...this.messages]
  }
}