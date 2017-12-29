import { Traveler } from './travelerc';
import { TravelerserviceService } from './travelerservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traveler',
  templateUrl: './traveler.component.html',
  styleUrls: ['./traveler.component.css']
})
export class TravelerComponent implements OnInit {
  constructor(public data1:TravelerserviceService,public _router:Router) { }
  public Traveler:Traveler[]=[];
  
  ngOnInit() {
    this.data1.getAlltraveller().subscribe(
      (data:any)=>{
        this.Traveler=data;
      }
    );
  }
  onTravellerDelete(item)
  {
  
    this.data1.deleteTraveller(item.traveller_id).subscribe(
      (data:any)=>{
        this.Traveler.splice(this.Traveler.indexOf(item),1);
      }
    );
  }
  onNavigate()
  {
    this._router.navigate(['/addtraveler']);
  }


}
