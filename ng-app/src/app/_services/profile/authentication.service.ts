import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {
  private subject = new Subject<any>();
  
  constructor() { }

  isAuthenticated() : boolean {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  // set auth
  setAuth(user:any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.refreshAfterAuth(true);
  }
  
  // clear auth
  doLogout() : void {
    localStorage.removeItem('currentUser');
    this.refreshAfterAuth(false);
  }

  // refresh after auth
  refreshAfterAuth(isAuth: boolean) : void {
    this.subject.next({ isAuth: isAuth });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
