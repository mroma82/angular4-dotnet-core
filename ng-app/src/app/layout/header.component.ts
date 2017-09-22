import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/profile/authentication.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;

  modules: any[];

  // authentication
  isAuthenticated: boolean;
  authenticatedProfile: any;
    
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {  
    this.isAuthenticated  = this.authService.isAuthenticated();  
    if( this.isAuthenticated) {
      this.authenticatedProfile = this.authService.getProfile();
    }

    this.subscription = this.authService.getMessage().subscribe(authObj => { 
      this.isAuthenticated = authObj.isAuth;      
      this.authenticatedProfile = authObj.profile;

      this.refreshMenu(); 
    });
  }

  logOut(): void {
    this.authService.doLogout();    
    this.router.navigate(['/']);
  };
  ngOnInit() {
    
    this.refreshMenu();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  refreshMenu() : void {

    if(this.isAuthenticated) {
      this.modules = [
        {
          name: "App 1",
          url: "/app/app1"
        },
        {
          name: "App 2",
          url: "/app/app2"
        }
      ];
    } else {
      this.modules = [
        {
          name: "Login",
          url: "/login"
        }
      ];
    }
  }

}
