import { Component, OnInit } from '@angular/core';
import {  Hotels} from "./hotelc";
import { NavbarComponent } from '../navbar/navbar.component';
import { HotelDataService } from '../hotel-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  public hotel:Hotels[]=[];
  public hotel1:Hotels[]=[];
  public delarr:Hotels[]=[];
  txtsearch:string="";
  constructor(public _data:HotelDataService,public _router:Router) { }

  ngOnInit() {
    this._data.getAllHotels().subscribe(
      (data:any)=>{
        this.hotel=data;
        this.hotel1=data;
      }
    );
  }

  editHotel(item){
    
     this._router.navigate(['/edithotel',item.hotel_id]);
   }

  onHotelDelete(item)
  {
    this._data.deleteHotel(item.hotel_id).subscribe(
      (data:any)=>{
        this.hotel.splice(this.hotel.indexOf(item),1);
      }
    );
  }
  onNavigate()
  {
    this._router.navigate(['/addhotel']);
  }
  onSearch()
  {
    if(this.txtsearch!='')
    {
      this.hotel=this.hotel1.filter((x)=>x.hotel_name.indexOf(this.txtsearch)!==-1);
      
    }
    else
    {
      this.hotel=this.hotel1;
      
    }
  }
  i:number=0;
 /* checkChange(item:Hotels)
    {
      
        if(this.delarr.find(x=>x==item))
        {
          this.delarr.splice(this.delarr.indexOf(item),1);
        }
        else
        {
          this.delarr.push(item);
        }
        console.log(this.delarr);
      
    }*/

    checkChange(item:Hotels)
    {
      
        if(this.delarr.find(x=>x==item))
        {
          this.delarr.splice(this.delarr.indexOf(item),1);
        }
        else
        {
          this.delarr.push(item);
        }
        console.log(this.delarr);
      
    }
  /*deleteAll()
  {
    
    if(confirm("Are you sure you want to delete"))
    {
      
      this._data.deleteAllHotels(this.delarr).subscribe(
        (data:any)=>{
          for(this.i=0;this.i<this.delarr.length;this.i++)
          {
            this.hotel.splice(this.hotel.indexOf(this.delarr[this.i]),1);
            console.log("DONE");
          }
          this.hotel=[];
        },
        function(err)
        {
          console.log(err);
        },
        function()
        {
        });
    }
  } 
}*/
deleteAll()
{
  
  if(confirm("Are you sure you want to delete"))
  {
    
    this._data.deleteAllHotels(this.delarr).subscribe(
      (data:any)=>{
        for(this.i=0;this.i<this.delarr.length;this.i++)
        {
          this.hotel.splice(this.hotel.indexOf(this.delarr[this.i]),1);
          console.log("DONE");
        }
        this.hotel1=[];
      },
      function(err)
      {
        console.log(err);
      },
      function()
      {
      });
  }
} 
}



