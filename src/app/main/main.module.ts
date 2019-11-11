import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainShareModule } from './share/share.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { AnnouncementPageComponent } from './pages/announcement-page/announcement-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [MainComponent, DashboardPageComponent, CalendarPageComponent, AnnouncementPageComponent, CoursesPageComponent, MessagesPageComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ShareModule
  ],
  providers: [MainShareModule]
})
export class MainModule { }
