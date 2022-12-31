import { Component } from '@angular/core';
import { Message } from '@app/home/model/message';

@Component({
  selector: 'app-my-messages-page',
  templateUrl: './my-messages-page.component.html',
  styleUrls: ['./my-messages-page.component.css']
})
export class MyMessagesPageComponent {
  public messages!: Message[];

  ngOnInit(): void {
      this.messages = [new Message(null)]
  }

}
