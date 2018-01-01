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
  name:string="";
  address:string="";
  img:string="";
  city:string="";
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:TravelerserviceService) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
          this.id=para["id"];
         
      }
  );

  this._data.gettravellerById(this.id).subscribe(
    (data:Traveler[])=>{
      this.name=data[0].traveller_name;
      this.address=data[0].traveller_address;
      this.img=data[0].traveller_img;
      this.city=data[0].city;
    }
  );
}
  onUpdate(){
    let traveler=new Traveler(this.name,'','',this.address,this.img,this.city);
    this._data.editTraveler(this.id,traveler).subscribe(
      ()=>{
        this._router.navigate(['/traveler']);
      }
    );
  }
  
  
}
