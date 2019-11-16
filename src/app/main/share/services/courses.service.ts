import { Injectable } from '@angular/core';
import { Course } from '../models/Course';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      title: 'History of the Earth',
      teacher: {
        name: 'Mr.Jason Bourne'
      },
      progress: 100
    },
    {
      title: 'History of the Earth',
      teacher: {
        name: 'Mr.Jason Bourne'
      },
      progress: 70
    },
    {
      title: 'History of the Earth',
      teacher: {
        name: 'Mr.Jason Bourne'
      },
      progress: 55
    },
    {
      title: 'History of the Earth',
      teacher: {
        name: 'Mr.Jason Bourne'
      },
      progress: 20
    },
    {
      title: 'History of the Earth',
      teacher: {
        name: 'Mr.Jason Bourne'
      },
      progress: 0
    }
  ]

  constructor() { }

  getCourses() {
    return [...this.courses]
  }
}
