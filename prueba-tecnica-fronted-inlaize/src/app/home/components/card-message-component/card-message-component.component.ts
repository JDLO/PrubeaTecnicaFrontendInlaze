import { Component, Input, OnInit } from '@angular/core';
import { Message } from '@app/home/model/message';
import { empty } from 'rxjs';

@Component({
  selector: 'app-card-message-component',
  templateUrl: './card-message-component.component.html',
  styleUrls: ['./card-message-component.component.css']
})
export class CardMessageComponentComponent implements OnInit {
  @Input()
  public message! : Message;

  constructor(){}
  ngOnInit(): void {}
}
