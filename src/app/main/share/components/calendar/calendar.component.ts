import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import * as moment from 'moment'
import { DateService } from '../../services/date.service';
import { CreateEventComponent } from '../create-event/create-event.component';
import { RefDirective } from '../../directives/ref.directive';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Day {
  value: moment.Moment,
  active: boolean,
  disabled: boolean,
  selected: boolean
}

interface Week {
  days: Day[]
}

interface Event {
  date: string,
  events: Array<String>
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @ViewChild(RefDirective, { static: false }) refDir: RefDirective

  calendar: Week[]

  constructor(private dateService: DateService, private resolver: ComponentFactoryResolver, public dialog: MatDialog) { }

  ngOnInit() {
    this.dateService.date.subscribe(this.generate.bind(this))
  }

  generate(now: moment.Moment) {
    const startDay = now.clone().startOf('month').startOf('week')
    const endDay = now.clone().endOf('month').endOf('week')

    const date = startDay.clone().subtract(1, 'day')

    const calendar = []

    while (date.isBefore(endDay, 'day')) {
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => {
            const value = date.add(1, 'day').clone()
            const active = moment().isSame(value, 'date')
            const disabled = !now.isSame(value, 'month')
            const selected = this.dateService.dateHaveEvent(value.format())

            return {
              value, active, disabled, selected
            }
          })
      })

      this.calendar = calendar
    }
  }

  select(day) {
    if (day.disabled) return
    this.createEvent(day)
  }

  createEvent(day) {
    const dialogRef = this.dialog.open(CreateEventComponent, {
      width: '350px',
      data: { date: day.value.format() }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const event = {
          date: day.value.format(),
          events: result
        }
        console.log(result);
        if (result.length) {
          day.selected = true
        } else {
          day.selected = false
        }
        this.dateService.createEvent(event)
      } else {
        if (!this.dateService.getEvents(day.value.format()).length) {
          day.selected = false
        }
      }
    });
  }

}
