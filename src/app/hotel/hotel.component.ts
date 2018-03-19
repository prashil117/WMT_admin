import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material'
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
  @ViewChild(MatPaginator)paginator:MatPaginator;
  public hotel:Hotels[]=[];
  public hotel1:Hotels[]=[];
  public delarr:Hotels[]=[];
  txtsearch:string="";
  displayedColumns = ['check','hotel_img','hotel_name', 'hotel_address','hotel_feedback','hotel_city','hotel_rating','hotel_description','hotel_action'];
  dataSource: MatTableDataSource<Hotels>;
  constructor(public _data:HotelDataService,public _router:Router) { }

  ngOnInit() {
    this._data.getAllHotels().subscribe(
      (data:any)=>{
        this.hotel=data;
        this.hotel1=data;
        this.dataSource = new MatTableDataSource<Hotels>(this.hotel);
        this.dataSource.paginator=this.paginator;
        console.log(this.hotel);
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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



