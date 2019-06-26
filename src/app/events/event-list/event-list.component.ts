import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrSrvice } from 'src/app/common/toastr.service';
import { ActivatedRoute } from '@angular/router';


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

  events: any;
  constructor(private eventService: EventService, private toastr: ToastrSrvice, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.eventService.getEvents().subscribe(events => { this.events = events; });
    this.events = this.route.snapshot.data.events; // this events match with events in the route
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

}

