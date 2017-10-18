import { last } from '@angular/router/src/utils/collection';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/profile/authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../_services/profile/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  status: string = "it works!";
  
  model: LoginModel = new LoginModel();
  
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login() : void {

    // reset
    this.status = "";
    
    // check login
    this.loginService.run(this.model).then(response => {

      // check response
      if( response.success) {
        this.router.navigate(['/']);
      } else {
        this.status = response.text;
      }
      
    });
  }
}

// login model
export class LoginModel {
  public email: string;
  public password: string;
}
