import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { User } from '@app/home/model/user.interface';
import { AuthService } from '@app/home/services/auth.service';

@Component({
  selector: 'app-login-form-page',
  templateUrl: './login-form-page.component.html',
  styleUrls: ['./login-form-page.component.css']
})
export class LoginFormPageComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    public router: Router
    ){}

  ngOnInit(): void {
    const userData = {
      email: 'somesandra@gmail.com',
      password: 'somepassword',
    } as User;

    this.authService.login(userData).subscribe((res) => console.log('Login'));
  }
  onLogin(){
    const formValue = this.loginForm.value as User
    console.log(formValue);
    this.authService.login(formValue).subscribe((resp)=>{
      if (resp){
        this.router.navigate(['/home']);
      }
    })
  }
}
