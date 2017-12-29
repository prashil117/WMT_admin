import { Component, OnInit } from '@angular/core';
import { HotelDataService } from "../hotel-data.service";
import { Hotels } from "../hotel/hotelc";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  hotel_name:string;
  hotel_address:string;
  hotel_img:string;
  hotel_feedback:string;
  hotel_city:string;
  hotel_rating:string;
  hotel_description:string;
  constructor(public _data:HotelDataService,public _router:Router) { }

  ngOnInit() {
  }

  onAdd()
  {
    let item=new Hotels(this.hotel_name,this.hotel_address,this.hotel_img,this.hotel_feedback,this.hotel_city,this.hotel_rating,this.hotel_description);
    this._data.addHotel(item).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/hotels']);
      }
    );
  }

}
