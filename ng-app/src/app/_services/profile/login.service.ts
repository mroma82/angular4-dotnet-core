import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(
    private http: Http,
    private auth: AuthenticationService
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
      .then(response => 
      {
        var loginResponse = response.json() as LoginResponse;

        // check if ok, set auth
        if( loginResponse.success) {
          this.auth.setAuth(loginResponse.token, loginResponse.profile);
        }

        return loginResponse;
      });
        
  }
}

export class LoginRequest {
  email: string;
  password: string;
}

export class LoginResponse {
  token: string;
  success: boolean;
  text: string;
  profile: any;
}
