import { Routes } from '@angular/router';
import { EventListComponents } from './events/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventListComponents },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
