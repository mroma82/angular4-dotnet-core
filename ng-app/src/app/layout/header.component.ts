import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modules: any[] = [
    {
      name: "App 1",
      url: "/app1"
    },
    {
      name: "App 2",
      url: "/app2"
    },
    {
      name: "App 3",
      url: "/app3"
    }
  ];
    
  constructor() { }

  ngOnInit() {
  }

}
