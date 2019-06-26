import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventThumbnailComponent,
  EventListComponents,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.components';
import { ToastrSrvice } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/errors.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponents,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrSrvice,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolver

  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {


}
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('you have not saed this event, do you really want to exit');
  }
  return true;
}
