import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponents } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-list/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.components';
import { EventService } from './events/shared/event.service';
import { ToastrSrvice } from './common/toastr.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponents,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService, ToastrSrvice],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
