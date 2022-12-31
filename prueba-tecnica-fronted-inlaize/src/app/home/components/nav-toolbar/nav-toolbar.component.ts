import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '@app/home/model/message';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.css']
})
export class NavToolbarComponent {
  public messages!: Message[];

  ngOnInit(): void {
      this.messages = [new Message(null)]
  }

  public constructor(
    private router: Router
  ){}

  public navegar(pagina: string){
    if (pagina == 'createmessages'){
      this.router.navigate(['/message'])
    }else if (pagina == 'mymessages'){
      this.router.navigate(['/message/my'])
    }else if (pagina == 'seeallmessages'){
      this.router.navigate(['/home'])
    }
  }
}
