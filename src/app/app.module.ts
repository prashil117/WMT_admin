import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { UserserviceService } from '../app/user/userservice.service';
import { TravelerComponent } from './traveler/traveler.component';
import { TravelerserviceService } from './traveler/travelerservice.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    TravelerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserserviceService,TravelerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
