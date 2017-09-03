import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';

import { AppRoutingModule }     from './routing.module';

import { HomeComponent } from './home.component';
import { App1ListingComponent } from './app1/app1-listing.component';
import { App1ParametersComponent } from './app1/app1-parameters.component';
import { App2ListingComponent } from './app2/app2-listing.component';
import { App1ContainerComponent } from './app1/app1-container.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    App1ListingComponent,
    App2ListingComponent,
    App1ParametersComponent,
    App1ParametersComponent,
    App1ContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
