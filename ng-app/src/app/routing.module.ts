import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent } from './home.component';

import { AppContainerComponent } from './app-container.component';
import {App1ContainerComponent} from './app1/app1-container.component';
import { App1ListingComponent } from './app1/app1-listing.component';
import { App1ParametersComponent } from './app1/app1-parameters.component';

import { App2ListingComponent } from './app2/app2-listing.component';
import { LoginComponent }  from './profile/login.component';

import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [  
  { path: '',  component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { 
    path: 'app',
    component: AppContainerComponent,
    canActivate: [AuthGuard],

    children: [
      { 
        path: 'app1', 
        component: App1ContainerComponent,
        children: [
          { path: '', component: App1ListingComponent },
          { path: 'parameters', component: App1ParametersComponent }
        ],
        
      },
  
      { path: 'app2', component: App2ListingComponent }
    ]
  },


  { path: '**', redirectTo: ''}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers : [AuthGuard]
})
export class AppRoutingModule {}