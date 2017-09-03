import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',  
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appValues: string[];
  appValues2: string[];

  constructor(private http: Http) {     
    this.getValues().then(x => this.appValues = x);
    this.getValues2().then(x => this.appValues2 = x);
  }

  getValues(): Promise<string[]> {
    return this.http.get('/api/values/get')
        .toPromise()
        .then(response => response.json() as string[]);        
  }

  getValues2(): Promise<string[]> {
    return this.http.get('/api/values/get2')
        .toPromise()
        .then(response => response.json() as string[]);        
  }

  ngOnInit() {
  }

}
