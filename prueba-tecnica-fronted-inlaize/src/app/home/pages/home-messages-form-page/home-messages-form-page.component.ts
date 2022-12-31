import { Component, OnInit } from '@angular/core';
import { Message } from '@app/home/model/message';

@Component({
  selector: 'app-home-messages-form-page',
  templateUrl: './home-messages-form-page.component.html',
  styleUrls: ['./home-messages-form-page.component.css']
})
export class HomeMessagesFormPageComponent implements OnInit {
  public messages!: Message[];

  ngOnInit(): void {
      this.messages = [new Message(null)]
  }

  public constructor(){
  }

}
