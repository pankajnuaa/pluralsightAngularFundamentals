import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
              <nav-bar></nav-bar>
              <app-event-list></app-event-list>
              `

})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
