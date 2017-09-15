import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {
  private subject = new Subject<any>();
  
  constructor() { }

  isAuthenticated() : boolean {
    var currentUser = localStorage.getItem('currentUser');
    if (currentUser && currentUser !== undefined) {
      return true;
    }
    return false;
  }

  getProfile(): any {
    var currentUser = localStorage.getItem('currentUser');    
    if(currentUser && currentUser !== undefined && currentUser.toString() !== "undefined") {
      return JSON.parse(currentUser);
    }
    return undefined;
  }

  // set auth
  setAuth(profile:any) {
    localStorage.setItem('currentUser', JSON.stringify(profile));
    this.refreshAfterAuth(true, profile);
  }
  
  // clear auth
  doLogout() : void {
    localStorage.removeItem('currentUser');
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
}
