import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { UserserviceService } from '../app/user/userservice.service';
import { TravelerComponent } from './traveler/traveler.component';
import { TravelerserviceService } from './traveler/travelerservice.service';
import { HotelComponent } from './hotel/hotel.component';
import { HotelDataService } from './hotel-data.service';
import { routingArray } from './app.router';
import { LoginComponent } from './login/login.component';
import { EdithotelComponent } from './edithotel/edithotel.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import {LoginDataService  } from './login-data.service';



import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AddtavelerComponent } from './addtaveler/addtaveler.component';
import { EdittavelerComponent } from './edittaveler/edittaveler.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
   
    NavbarComponent,
    UserComponent,
    TravelerComponent,
    HotelComponent,
    LoginComponent,
    EdithotelComponent,
    AddhotelComponent,
    AdduserComponent,
    EdituserComponent,
    AddtavelerComponent,
    EdittavelerComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routingArray
  ],
  providers: [UserserviceService,TravelerserviceService,HotelDataService,LoginDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
