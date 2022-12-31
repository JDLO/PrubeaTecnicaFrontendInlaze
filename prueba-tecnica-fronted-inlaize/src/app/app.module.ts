import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardMessageComponentComponent } from './home/card-message-component/card-message-component.component';
import { CardMessagesPageComponent } from './home/card-messages-page/card-messages-page.component';
import { HomeMessagesFormPageComponent } from './home/home-messages-form-page/home-messages-form-page.component';
import { LoginFormPageComponent } from './login-logout/login-form-page/login-form-page.component';
import { SigninFormPageComponent } from './login-logout/signin-form-page/signin-form-page.component';
import { HomeMessagesPageComponent } from './home/home-messages-page/home-messages-page.component';
import { MessageComponent } from './home/models/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    CardMessageComponentComponent,
    CardMessagesPageComponent,
    HomeMessagesFormPageComponent,
    LoginFormPageComponent,
    SigninFormPageComponent,
    HomeMessagesPageComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
