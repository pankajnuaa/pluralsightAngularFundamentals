import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class='well hoverwell thumbnail'>
  <h2>{{event.name}}</h2>
  <h4>Date: {{event.date}}</h4>
  <h4>Time: {{event.time}}</h4>
  <h4>Price: \${{event.price}}</h4>
  <div>
    <span>Location: {{event.location.address}}</span>
   <!-- <span>&nbsp;</span>-->
    <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
  </div>

</div>
            `,
  styles: [`
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


}

