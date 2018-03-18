import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Traveler } from './../traveler/travelerc';
import { TravelerserviceService } from '../traveler/travelerservice.service';

@Component({
  selector: 'app-edittaveler',
  templateUrl: './edittaveler.component.html',
  styleUrls: ['./edittaveler.component.css']
})
export class EdittavelerComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  name1:string="";
  address1:string="";
  img1:string="";
  email1:string="";
  city1:string="";
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:TravelerserviceService) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
          this.id=para["id"];
         
      }
  );

  this._data.gettravellerById(this.id).subscribe(
    (data:Traveler[])=>{
      this.name1=data[0].traveller_name;
      this.address1=data[0].traveller_address;
      this.img1=data[0].traveller_img;
      this.city1=data[0].city;
      this.email1=data[0].traveller_email;
    }
  );
}
  onUpdate(){
    let traveler=new Traveler(this.name1,'','',this.address1,this.img1,this.city1);
    this._data.editTraveler(this.id,traveler).subscribe(
      ()=>{
        this._router.navigate(['/traveler']);
      }
    );
  }
  
  
}
