import { Routes } from '@angular/router';
import { EventListComponents } from './events/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Error404Component } from './errors/errors.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { CreateEventComponent } from './events/create-event.component';
import { EventListResolver } from './events/events-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  { path: 'events', component: EventListComponents, resolve: { events: EventListResolver } },
  {
    path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
