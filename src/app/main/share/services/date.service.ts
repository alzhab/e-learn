import { Injectable } from '@angular/core';
import * as moment from 'moment'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment())
  private datesWithEvent = [
    {
      date: '2019-11-10T00:00:00+06:00',
      events: [
        'Do something'
      ]
    }
  ]

  constructor() { }

  changeMonth(dir: number) {
    const value = this.date.value.add(dir, 'month')
    this.date.next(value)
  }

  dateHaveEvent(date) {
    return this.datesWithEvent.map(event => event.date).includes(date)
  }

  createEvent(event) {
    if (this.dateHaveEvent(event.date)) {
      this.datesWithEvent.find(e => {
        return e.date === event.date
      }).events = event.events
    } else {
      this.datesWithEvent.push(event)
    }
  }

  getEvents(date) {
    const data = this.datesWithEvent.find(event => {
      return event.date === date
    })

    if (data) {
      return data.events
    } else {
      return []
    }
  }
}
