import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



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
import { ForgotComponent } from './forgot/forgot.component';
import { NgProgressModule } from 'ngx-progressbar';
import { EmailserviceService } from './forgot/emailservice.service';


import { MatInputModule,MatFormFieldModule,MatButtonModule,MatCardModule,MatTableModule,MatPaginatorModule,MatSortModule,MatIconModule,MatDatepickerModule,MatRadioModule,MatNativeDateModule } from '@angular/material';

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
    DashboardComponent,
    ForgotComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgProgressModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,MatSortModule,MatIconModule,MatDatepickerModule,MatRadioModule,MatNativeDateModule,
    routingArray
  ],
  providers: [UserserviceService,TravelerserviceService,HotelDataService,LoginDataService,EmailserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
