import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {
  private subject = new Subject<any>();
  
  constructor() { }

  isAuthenticated() : boolean {
    var auth = localStorage.getItem('auth');
    if (auth && auth !== undefined) {
      return true;
    }
    return false;
  }

  getProfile(): any {
    var auth = localStorage.getItem('auth');    
    if(auth && auth !== undefined && auth.toString() !== "undefined") {
      return JSON.parse(auth).profile;
    }
    return undefined;
  }

  // set auth
  setAuth(token:string, profile:any) {
    localStorage.setItem('auth', JSON.stringify({
      token: token,
      profile: profile
    }));
    this.refreshAfterAuth(true, profile);
  }
  
  // clear auth
  doLogout() : void {
    localStorage.removeItem('auth');
    this.refreshAfterAuth(false, null);
  }

  // refresh after auth
  refreshAfterAuth(isAuth: boolean, profile: any) : void {
    this.subject.next({ 
      isAuth: isAuth,
      profile: profile
    });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }


  getJwtHeader() {
    // create authorization header with jwt token
    let auth = JSON.parse(localStorage.getItem('auth'));
    if (auth && auth.token) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + auth.token });
        return new RequestOptions({ headers: headers });
    }
  }
}
