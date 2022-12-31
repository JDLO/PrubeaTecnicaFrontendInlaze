import { Component } from '@angular/core';
import { Message } from '@app/home/model/message';

@Component({
  selector: 'app-home-messages-page',
  templateUrl: './home-messages-page.component.html',
  styleUrls: ['./home-messages-page.component.css']
})
export class HomeMessagesPageComponent {
  public messages!: Message[];

  ngOnInit(): void {
      this.messages = [new Message(null)]
  }

  public constructor(){
  }
}
