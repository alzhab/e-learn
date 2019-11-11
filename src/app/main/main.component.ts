import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public asideClose = false;
  public asideFixed = true;
  public isMobileDevice = false
  public asideMini = false
  public asideSettingsClose = true

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
    },
    {
      path: 'auth',
      icon: 'power_settings_new',
      label: 'Exit'
    }
  ]

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkDeviceWidth()
  }

  ngOnInit() {
    this.checkDeviceWidth()
  }

  checkDeviceWidth() {
    if (window.innerWidth < 769) {
      this.isMobileDevice = true;
      this.asideFixed = false
    } else {
      this.isMobileDevice = false
    }
  }

  sideNavToggle(e, state) {
    this.toggleSettings(true)

    if (!this.asideFixed && !this.asideMini) {
      if (!state) {
        this.asideClose = !this.asideClose
      } else {
        this.asideClose = state
      }
    }

    e.stopPropagation()
  }

  toggleSettings(state) {
    if (!state) {
      this.asideSettingsClose = !this.asideSettingsClose
    } else {
      this.asideSettingsClose = state
    }
  }
}
