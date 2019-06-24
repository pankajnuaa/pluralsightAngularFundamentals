import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrSrvice } from 'src/app/common/toastr.service';


@Component({
  selector: 'app-event-list',
  template: `<div>
              <h1>Upcoming Angular Events</h1>
              <hr>
              <div class="row">
              <div *ngFor="let ourevent of events" class="col-md-5">
              <event-thumbnail
              (click) = "handleThumbnailClick(ourevent.name)"
              [event] ="ourevent"></event-thumbnail>
              </div>
              </div>
              </div>`,
  styleUrls: ['./event-list.component.css']
})
export class EventListComponents implements OnInit {
  events: any[];
  constructor(private eventService: EventService, private toastr: ToastrSrvice) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

}

