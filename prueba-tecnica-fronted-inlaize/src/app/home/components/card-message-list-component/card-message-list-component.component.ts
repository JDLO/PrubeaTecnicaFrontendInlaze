import { Component, Input } from '@angular/core';
import { Message } from '@app/home/model/message';

@Component({
  selector: 'app-card-message-list-component',
  templateUrl: './card-message-list-component.component.html',
  styleUrls: ['./card-message-list-component.component.css']
})
export class CardMessageListComponentComponent {
  @Input()
  public messages!: Message[];

}
