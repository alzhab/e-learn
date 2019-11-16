import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewChild, AfterContentChecked, AfterViewInit, AfterContentInit, ElementRef } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn, zoomOut } from 'ng-animate';
import { MatDialogRef, MAT_DIALOG_DATA, MatListOption, MatInput, MatSelectionList } from '@angular/material';
import { DateService } from '../../services/date.service';
import { CdkScrollable } from '@angular/cdk/overlay';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
  animations: [
    trigger('modal', [
      transition(':enter', useAnimation(zoomIn, {
        params: { timing: 0.5 }
      })),
      transition(':leave', useAnimation(zoomOut, {
        params: { timing: 0.5 }
      }))
    ])
  ],
})
export class CreateEventComponent implements OnInit {
  public events = []
  public event = ''
  public eventsSelected = []
  public eventsToSend = []

  constructor(
    private dateService: DateService,
    public dialogRef: MatDialogRef<CreateEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  @ViewChild('input', { static: false }) input: ElementRef;

  ngOnInit(): void {
    this.events = this.eventsToSend = this.dateService.getEvents(this.data.date)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createEvent() {
    this.events.push(this.event)
    this.event = ''
    this.input.nativeElement.focus()
  }

  onGroupsChange(options: MatListOption[]) {
    this.eventsToSend = this.deleteComplittedEvents(options)
  }

  deleteComplittedEvents(arr) {
    return this.events.filter(e => {
      return !arr.includes(e)
    })
  }
}
