import { Component, OnInit } from '@angular/core';
import {  Hotels} from "./hotelc";
import { NavbarComponent } from '../navbar/navbar.component';
import { HotelDataService } from '../hotel-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  public hotel:Hotels[]=[];

  constructor(public _data:HotelDataService,public _router:Router) { }

  ngOnInit() {
    this._data.getAllHotels().subscribe(
      (data:any)=>{
        this.hotel=data;
      }
    );
  }
  onHotelDelete(item)
  {
    this._data.deleteHotel(item.hotel_id).subscribe(
      (data:any)=>{
        this.hotel.splice(this.hotel.indexOf(item),1);
      }
    );
  }
  onNavigate()
  {
    this._router.navigate(['/addhotel']);
  }


}
