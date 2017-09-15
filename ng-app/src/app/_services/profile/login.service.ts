import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(
    private http: Http
  ) { }

  // login
  run(request: LoginRequest): Promise<LoginResponse>
  {
    // try the login
    return this.http
      .post('/api/profile/login', {
        email: request.email,
        password: request.password
      })
      .toPromise()
      .then(response => response.json() as LoginResponse);      
  }
}

export class LoginRequest {
  email: string;
  password: string;
}

export class LoginResponse {
  success: boolean;
  user: any;
}
