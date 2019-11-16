import { Injectable } from '@angular/core';
import { Announcement } from '../models/Announcemet';

@Injectable()
export class AnnouncementsService {

  private announcements: Announcement[] = [
    {
      view: 12312,
      title: 'MERRY CHRISTMAS EVERYONE AND DAYS OFF SCHEDULE',
      text: `Lorem ipsum dolor sit amet consectetur adi
      pisicing elit. Animi molestias enim labor
      iosam nisi fuga modi, doloribus laborum 
      alias corporis qui non vero fugiat voluptate. Est.`,
      authorType: 'teacher'
    },
    {
      view: 12312,
      title: 'MERRY CHRISTMAS EVERYONE AND DAYS OFF SCHEDULE',
      text: `Lorem ipsum dolor sit amet consectetur adi
      pisicing elit. Animi molestias enim labor
      iosam nisi fuga modi, doloribus laborum 
      alias corporis qui non vero fugiat voluptate. Est.`,
      authorType: 'admin'
    },
    {
      view: 12312,
      title: 'MERRY CHRISTMAS EVERYONE AND DAYS OFF SCHEDULE',
      text: `Lorem ipsum dolor sit amet consectetur adi
      pisicing elit. Animi molestias enim labor
      iosam nisi fuga modi, doloribus laborum 
      alias corporis qui non vero fugiat voluptate. Est.`,
      authorType: 'teacher'
    },
    {
      view: 12312,
      title: 'MERRY CHRISTMAS EVERYONE AND DAYS OFF SCHEDULE',
      text: `Lorem ipsum dolor sit amet consectetur adi
      pisicing elit. Animi molestias enim labor
      iosam nisi fuga modi, doloribus laborum 
      alias corporis qui non vero fugiat voluptate. Est.`,
      authorType: 'admin'
    },
    {
      view: 12312,
      title: 'MERRY CHRISTMAS EVERYONE AND DAYS OFF SCHEDULE',
      text: `Lorem ipsum dolor sit amet consectetur adi
      pisicing elit. Animi molestias enim labor
      iosam nisi fuga modi, doloribus laborum 
      alias corporis qui non vero fugiat voluptate. Est.`,
      authorType: 'teacher'
    },
    {
      view: 12312,
      title: 'MERRY CHRISTMAS EVERYONE AND DAYS OFF SCHEDULE',
      text: `Lorem ipsum dolor sit amet consectetur adi
      pisicing elit. Animi molestias enim labor
      iosam nisi fuga modi, doloribus laborum 
      alias corporis qui non vero fugiat voluptate. Est.`,
      authorType: 'admin'
    },
    {
      view: 12312,
      title: 'MERRY CHRISTMAS EVERYONE AND DAYS OFF SCHEDULE',
      text: `Lorem ipsum dolor sit amet consectetur adi
      pisicing elit. Animi molestias enim labor
      iosam nisi fuga modi, doloribus laborum 
      alias corporis qui non vero fugiat voluptate. Est.`,
      authorType: 'teacher'
    },
    {
      view: 12312,
      title: 'MERRY CHRISTMAS EVERYONE AND DAYS OFF SCHEDULE',
      text: `Lorem ipsum dolor sit amet consectetur adi
      pisicing elit. Animi molestias enim labor
      iosam nisi fuga modi, doloribus laborum 
      alias corporis qui non vero fugiat voluptate. Est.`,
      authorType: 'admin'
    },
  ]

  constructor() { }

  getAnnouncements(): Announcement[] {
    return [...this.announcements]
  }
}
