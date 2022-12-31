import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMessagesFormPageComponent } from './home/pages/home-messages-form-page/home-messages-form-page.component';
import { HomeMessagesPageComponent } from './home/pages/home-messages-page/home-messages-page.component';
import { MyMessagesPageComponent } from './home/pages/my-messages-page/my-messages-page.component';
import { LoginFormPageComponent } from './login-logout/login-form-page/login-form-page.component';
import { SigninFormPageComponent } from './login-logout/signin-form-page/signin-form-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeMessagesPageComponent },
  { path: 'message', component:  HomeMessagesFormPageComponent},
  { path: 'message/my', component:  MyMessagesPageComponent},
  { path: 'login', component: LoginFormPageComponent },
  { path: 'signin', component: SigninFormPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
