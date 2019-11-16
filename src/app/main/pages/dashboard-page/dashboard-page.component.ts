import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../../share/services/announcements.service';
import { Announcement, AuthorType } from '../../share/models/Announcemet';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideOutLeft, slideInLeft } from 'ng-animate';
import { MessagesService } from '../../share/services/messages.service';
import { Message } from '../../share/models/Message';
import { CoursesService } from '../../share/services/courses.service';
import { Course } from '../../share/models/Course';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  animations: [
    trigger('message', [
      transition(':enter', useAnimation(slideInLeft, {
        params: { timing: 0.5 }
      })),
      transition(':leave', useAnimation(slideOutLeft, {
        params: { timing: 0.5 }
      }))
    ])
  ],
})
export class DashboardPageComponent implements OnInit {
  public announcements: Announcement[]
  public messages: Message[]
  public courses: Course[]
  public announcementType: AuthorType = 'all'

  constructor(
    private announcementsService: AnnouncementsService,
    private messagesService: MessagesService,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.announcements = this.announcementsService.getAnnouncements()
    this.messages = this.messagesService.getMessages()
    this.courses = this.coursesService.getCourses()
  }

  changeFilter(type: AuthorType) {
    if (this.announcementType === type) {
      this.announcementType = 'all'
      return
    }
    this.announcementType = type
  }
}
