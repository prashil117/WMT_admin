import { Traveler } from './travelerc';
import { TravelerserviceService } from './travelerservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traveler',
  templateUrl: './traveler.component.html',
  styleUrls: ['./traveler.component.css']
})
export class TravelerComponent implements OnInit {
  constructor(public data1:TravelerserviceService) { }
  public Traveler:Traveler[]=[];
  
  ngOnInit() {
    this.data1.getAlltraveller().subscribe(
      (data:any)=>{
        this.Traveler=data;
      }
    );
  }
 

}
