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
  name1:string="";
  address1:string="";
  img:string="";
  feedback1:string="";
  city1:string="";
  rating1:string="";
  description1:string="";

  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:HotelDataService) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
          this.id=para["id"];
         
      }
  );

  this._data.getHotelById(this.id).subscribe(
    (data:Hotels[])=>{
      this.name1=data[0].hotel_name;
      this.address1=data[0].hotel_address;
      this.img=data[0].hotel_img;
      this.feedback1=data[0].hotel_feedback;
      this.city1=data[0].hotel_city;
      this.rating1=data[0].hotel_rating;
      this.description1=data[0].hotel_description;
    }
  );
  }
  onUpdate(){
    let hotel=new Hotels(this.name1,this.address1,this.img,this.feedback1,this.city1,this.rating1,this.description1);
    this._data.editHotel(this.id,hotel).subscribe(
      ()=>{
        this._router.navigate(['/hotels']);
      }
    );
  }

}
