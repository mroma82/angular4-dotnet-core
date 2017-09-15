import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/profile/authentication.service';
import { Subscription } from 'rxjs/Subscription';


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
    
  constructor(
    private authService: AuthenticationService
  ) { 
    this.isAuthenticated  = this.authService.isAuthenticated();  
    
    this.subscription = this.authService.getMessage().subscribe(isAuth => { 
      this.isAuthenticated = isAuth;
      this.refreshMenu(); 
    });
  }

  logOut(): void {
    this.authService.doLogout();

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
        },
        {
          name: "App 3",
          url: "/app/app3"
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
