import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { HotelDataService } from '../hotel-data.service';
import { Hotels } from "../hotel/hotelc";
@Component({
  selector: 'app-edithotel',
  templateUrl: './edithotel.component.html',
  styleUrls: ['./edithotel.component.css']
})
export class EdithotelComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  name:string="";
  address:string="";
  img:string="";
  feedback:string="";
  city:string="";
  rating:string="";
  description:string="";

  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:HotelDataService) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
          this.id=para["id"];
         
      }
  );

  this._data.getHotelById(this.id).subscribe(
    (data:Hotels[])=>{
      this.name=data[0].hotel_name;
      this.address=data[0].hotel_address;
      this.img=data[0].hotel_img;
      this.feedback=data[0].hotel_feedback;
      this.city=data[0].hotel_city;
      this.rating=data[0].hotel_rating;
    }
  );
  }
  onUpdate(){
    let hotel=new Hotels(this.name,this.address,this.img,this.feedback,this.city,this.rating,this.description);
    this._data.editHotel(this.id,hotel).subscribe(
      ()=>{
        this._router.navigate(['/hotels']);
      }
    );
  }

}
