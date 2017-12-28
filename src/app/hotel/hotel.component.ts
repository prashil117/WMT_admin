import { Component, OnInit } from '@angular/core';
import {  Hotels} from "./hotelc";
import { NavbarComponent } from '../navbar/navbar.component';
import { HotelDataService } from '../hotel-data.service';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  public hotel:Hotels[]=[];

  constructor(public _data:HotelDataService) { }

  ngOnInit() {
    this._data.getAllHotels().subscribe(
      (data:any)=>{
        this.hotel=data;
      }
    );
  }

}
