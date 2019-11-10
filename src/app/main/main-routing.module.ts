import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { AnnouncementPageComponent } from './pages/announcement-page/announcement-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardPageComponent
      },
      {
        path: 'calendar',
        component: CalendarPageComponent
      },
      {
        path: 'announcement',
        component: AnnouncementPageComponent
      },
      {
        path: 'courses',
        component: CoursesPageComponent
      },
      {
        path: 'messages',
        component: MessagesPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
