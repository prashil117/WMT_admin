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
  public Traveler1:Traveler[]=[];
  txtsearch:string="";
  
  ngOnInit() {
    this.data1.getAlltraveller().subscribe(
      (data:any)=>{
        this.Traveler=data;
        this.Traveler1=data;
      }
    );
  }

  editTraveller(item){
    
     this._router.navigate(['/edittraveler',item.traveller_id]);
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
  onSearch()
  {
    if(this.txtsearch!='')
    {
      this.Traveler=this.Traveler1.filter((x)=>x.traveller_name.indexOf(this.txtsearch)!==-1);
      
    }
    else
    {
      this.Traveler=this.Traveler1;
      
    }
  }

}
