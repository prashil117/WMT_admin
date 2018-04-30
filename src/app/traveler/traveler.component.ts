import { Traveler } from './travelerc';
import { TravelerserviceService } from './travelerservice.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material'
import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-traveler',
  templateUrl: './traveler.component.html',
  styleUrls: ['./traveler.component.css']
})
export class TravelerComponent implements OnInit {
  @ViewChild(MatPaginator)paginator:MatPaginator;
  constructor(public data1:TravelerserviceService,public _router:Router,public ngProgress: NgProgress) { }
  public Traveler:Traveler[]=[];
  public delarr:Traveler[]=[];
  public Traveler1:Traveler[]=[];
  txtsearch:string="";
  displayedColumns = ['check','traveller_img','traveller_name', 'traveller_email','traveller_address','city','traveller_action'];
  dataSource: MatTableDataSource<Traveler>;
  
  ngOnInit() {
    this.data1.getAlltraveller().subscribe(
      (data:any)=>{
        this.Traveler=data;
        this.Traveler1=data;
        this.dataSource = new MatTableDataSource<Traveler>(this.Traveler);
        this.dataSource.paginator=this.paginator;
        console.log(this.Traveler);
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editTraveller(item){
    
     this._router.navigate(['/edittraveler',item.traveller_id]);
   }

  onTravellerDelete(item)
  {
    this.ngProgress.start();
    this.data1.deleteTraveller(item.traveller_id).subscribe(
      (data:any)=>{
        this.Traveler.splice(this.Traveler.indexOf(item),1);
        alert("Deleted Sucessfull");
        this._router.navigate(['/traveler']);
        this.ngProgress.done();
        this.ngOnInit();
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
  i:number=0;

  checkChange(item:Traveler)
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
      
      this.data1.deleteAllTraveler(this.delarr).subscribe(
        (data:any)=>{
          for(this.i=0;this.i<this.delarr.length;this.i++)
          {
            this.Traveler.splice(this.Traveler.indexOf(this.delarr[this.i]),1);
            console.log("DONE");
          }
          this.Traveler=[];
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
    this.ngProgress.start(); 
    this.data1.deleteAllTraveler(this.delarr).subscribe(
      (data:any)=>{
        for(this.i=0;this.i<this.delarr.length;this.i++)
        {
          this.Traveler.splice(this.Traveler.indexOf(this.delarr[this.i]),1);
          console.log("DONE");
          this.ngProgress.done();
          this.ngOnInit();
        }
        this.Traveler1=[];
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
