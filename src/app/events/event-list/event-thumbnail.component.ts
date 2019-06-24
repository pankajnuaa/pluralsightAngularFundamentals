import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class='well hoverwell thumbnail'>
  <h2>{{event?.name}}</h2>
  <h4>Date: {{event?.date}}</h4>
  <div [ngClass]="getStartTimeClass()"
  [ngSwitch] = "event?.time">>Time: {{event?.time}}
  <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
  <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
  <span *ngSwitchDefault>(Normal Start)</span>
  </div>

  <h4>Price: \${{event?.price}}</h4>
  <div *ngIf = "event?.location">
    <span>Location: {{event?.location?.address}}</span>
   <!-- <span>&nbsp;</span>-->
    <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
  </div>
  <div [hidden]="!event?.onlineUrl">
  Online URL: {{event?.onlineUrl}}
  </div>

</div>
            `,
  styles: [`
  .green{color: #003300 !important}
  .bold {font-weight: bold;}
  .thumbnail { min-height:250px;}
      .pad-left{ margin-left: 10px;}
      .well div{ color: #bbb;}

  `]
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();



  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return 'bold green';
    }
    return '[]';

  }
}

