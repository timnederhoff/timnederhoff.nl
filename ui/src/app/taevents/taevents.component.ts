import { Component, OnInit } from '@angular/core';
import { TaeventsService } from '../taevents.service';
import { TaEvent } from '../model/TaEvent';

@Component({
  selector: 'app-taevents',
  templateUrl: './taevents.component.html',
  styleUrls: ['./taevents.component.css']
})
export class TaeventsComponent implements OnInit {

  constructor(private taEventsService: TaeventsService) { }

  events: TaEvent[];

  getEvents() {
    this.taEventsService.getEvents().subscribe(events => this.events = events);
  }

  ngOnInit() {
    this.getEvents();
  }

}
