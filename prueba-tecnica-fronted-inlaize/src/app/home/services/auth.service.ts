import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { environment } from 'src/environments/environment';
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";
import { User, UserResponse } from '../model/user.interface';
import { BehaviorSubject } from 'rxjs';

const helper = new JwtHelperService;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  constructor(
    private httpClient: HttpClient
  ) {
    this.checkToken()
   }

  login(authData: User):Observable<UserResponse | void>{
    return this.httpClient.post<any>(
      `${environment.API_URL}/api/auth/login`,
      authData
      ).pipe(
        map((resp: any) => {
          console.log('Res =>', resp);
          // saveTocken()
          this.saveToken(resp.token);
          this.loggedIn.next(true);
          return resp
        }),
        catchError((err:any) => this.handleError(err))
      );
  }
  logout():void {
    localStorage.removeItem('token')
    // set user is Logged = false
  }
  private checkToken():void{
    let userToken = localStorage.getItem('token');
    let isExpired = helper.isTokenExpired(userToken);

    isExpired ? this.logout() : this.loggedIn.next(!isExpired);

    console.log('Token expiered', isExpired);
  }
  private saveToken(token: string){
    localStorage.setItem('token', token);
  }
  private handleError(err: any): Observable<never>{
    let errorMessage = 'An error ocurred retrienving data';
    if (err) {
      errorMessage = `Error code ${err.message}`;
    }
    window.alert(errorMessage)
    return throwError(errorMessage);
  }
}
