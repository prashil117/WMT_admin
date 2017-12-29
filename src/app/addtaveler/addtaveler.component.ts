import { Router } from '@angular/router';
import { Traveler } from './../traveler/travelerc';
import { Component, OnInit } from '@angular/core';
import { TravelerserviceService } from "../traveler/travelerservice.service";


@Component({
  selector: 'app-addtaveler',
  templateUrl: './addtaveler.component.html',
  styleUrls: ['./addtaveler.component.css']
})
export class AddtavelerComponent implements OnInit {
  name:string="";
  email_id:string="";
  address:string="";
  image:string="";
  city:string="";
  password:string="";

  constructor(public _data:TravelerserviceService,public _router:Router) { }

  ngOnInit() {
  }
  onAdd(){

    let item=new Traveler(this.name,this.email_id,this.password,this.address,this.image,this.city);
    this._data.addTraveler(item).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/traveler']);
      }
    );
  }


}
