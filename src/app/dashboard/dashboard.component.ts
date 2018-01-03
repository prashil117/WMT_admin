import { Component, OnInit } from '@angular/core';
import { User } from './../user/userc';
import { UserserviceService } from './../user/userservice.service';
import { Hotels } from './../hotel/hotelc';
import { HotelDataService } from './../hotel-data.service';
import { Traveler } from './../traveler/travelerc';
import { TravelerserviceService } from './../traveler/travelerservice.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
email:string="";
hotel:Hotels[]=[];
users:User[]=[];
Traveler:Traveler[]=[];
constructor(public data1:HotelDataService, public data2:TravelerserviceService,public data3:UserserviceService) { }

  ngOnInit() {
    this.email=localStorage.getItem('Email');
    this.data2.getAlltraveller().subscribe(
      (data:any)=>{
        this.Traveler=data;
        
      }
    );
    this.data1.getAllHotels().subscribe(
      (data:any)=>{
        this.hotel=data;
        
      }
    );
    this.data3.getAllUsers().subscribe(
      (data:any)=>{
        this.users=data;
        
      
      }
    );
  } 
}


