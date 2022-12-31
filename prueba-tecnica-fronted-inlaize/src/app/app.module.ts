import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardMessageComponentComponent } from './home/components/card-message-component/card-message-component.component';
import { CardMessagesPageComponent } from './home/pages/card-messages-page/card-messages-page.component';
import { HomeMessagesFormPageComponent } from './home/pages/home-messages-form-page/home-messages-form-page.component';
import { LoginFormPageComponent } from './login-logout/login-form-page/login-form-page.component';
import { SigninFormPageComponent } from './login-logout/signin-form-page/signin-form-page.component';
import { HomeMessagesPageComponent } from './home/pages/home-messages-page/home-messages-page.component';
import { MaterialModule } from '@app/material.module';
import { CardMessageListComponentComponent } from './home/components/card-message-list-component/card-message-list-component.component';
import { MyMessagesPageComponent } from './home/pages/my-messages-page/my-messages-page.component';
import { NavToolbarComponent } from './home/components/nav-toolbar/nav-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardMessageComponentComponent,
    CardMessagesPageComponent,
    HomeMessagesFormPageComponent,
    LoginFormPageComponent,
    SigninFormPageComponent,
    HomeMessagesPageComponent,
    CardMessageListComponentComponent,
    MyMessagesPageComponent,
    NavToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
