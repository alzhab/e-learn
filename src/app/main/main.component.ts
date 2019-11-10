import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public sideNavOpen = false
  public navLinks = [
    {
      path: 'dashboard',
      icon: 'home',
      label: 'Dashboard'
    },
    {
      path: 'calendar',
      icon: 'calendar_today',
      label: 'Calendar'
    },
    {
      path: 'announcement',
      icon: 'announcementy',
      label: 'Announcement'
    },
    {
      path: 'courses',
      icon: 'description',
      label: 'Courses'
    },
    {
      path: 'messages',
      icon: 'email',
      label: 'Messages'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  sideNavToggle() {
    this.sideNavOpen = !this.sideNavOpen
  }
}
