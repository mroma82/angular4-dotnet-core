import { AuthenticationService } from '../_services/profile/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-app2-listing',
  templateUrl: './app2-listing.component.html',
  styleUrls: ['./app2-listing.component.css']
})
export class App2ListingComponent implements OnInit {

  appValues: string[];
  appValuesPost: string[];

  constructor(
    private http: Http,
    private auth: AuthenticationService
  ) { 

    // get values
    this.getValues().then(x => this.appValues = x);
    this.getValuesPost().then(x => this.appValuesPost = x);

  }

  ngOnInit() {
  }

  getValues(): Promise<string[]> {
    return this.http.get('/api/app2/get', this.auth.getJwtHeader())
        .toPromise()
        .then(response => response.json() as string[]);        
  }

  getValuesPost(): Promise<string[]> {
    return this.http.post('/api/app2/getP', {}, this.auth.getJwtHeader())
        .toPromise()
        .then(response => response.json() as string[]);        
  }
}
