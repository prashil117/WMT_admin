import { Traveler } from './../traveler/travelerc';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { TravelerComponent } from "../traveler/traveler.component";
import { TravelerserviceService } from '../traveler/travelerservice.service';

@Component({
  selector: 'app-edittaveler',
  templateUrl: './edittaveler.component.html',
  styleUrls: ['./edittaveler.component.css']
})
export class EdittavelerComponent implements OnInit {
  public _subscription:Subscription;
  email:string="";
  name:string="";
  address:string="";
  img:string="";
  city:string="";  
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:TravelerserviceService) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
          this.email=para["email"];
         
      }
    );
  
  this._data.getTravelerById(this.email).subscribe(
    (data:Traveler[])=>{
      this.name=data[0].traveller_name
      this.address=data[0].traveller_address;
      this.img=data[0].traveller_img;
      this.city=data[0].city;
    }
  );
  }
  onUpdate(){
    let user=new Traveler(this.email,this.name,'',this.address,this.img,this.city);
    this._data.editTraveler(this.email,user).subscribe(
      ()=>{
        this._router.navigate(['/traveler']);
      }
    );
  }
  
}
