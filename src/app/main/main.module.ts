import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AnnouncementPageComponent } from './pages/announcement-page/announcement-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { ShareModule } from '../share/share.module';
import { AnnouncementsFilterPipe } from './share/pipes/announcements-filter.pipe';
import { AnnouncementsMiniComponent } from './share/components/announcements-mini/announcements-mini.component';
import { AnnouncementsService } from './share/services/announcements.service';
import { MessagesService } from './share/services/messages.service';
import { CoursesService } from './share/services/courses.service';
import { CourseProgresDirective } from './share/directives/course-progres.directive';
import { SelectorComponent } from './share/components/selector/selector.component';
import { MomentPipe } from './share/pipes/moment.pipe';
import { CalendarComponent } from './share/components/calendar/calendar.component';
import { CreateEventComponent } from './share/components/create-event/create-event.component';
import { RefDirective } from './share/directives/ref.directive';

@NgModule({
  declarations: [
    MainComponent,
    DashboardPageComponent,
    AnnouncementPageComponent,
    CoursesPageComponent,
    MessagesPageComponent,
    AnnouncementsFilterPipe,
    AnnouncementsMiniComponent,
    CourseProgresDirective,
    SelectorComponent,
    MomentPipe,
    CalendarComponent,
    RefDirective,
    CreateEventComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ShareModule,
  ],
  entryComponents: [CreateEventComponent],
  providers: [AnnouncementsService, MessagesService, AnnouncementsFilterPipe, CoursesService]
})
export class MainModule { }
