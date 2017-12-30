import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { User } from "./userc";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users:User[]=[];
  public users1:User[]=[];
  public no:User[]=[];
  public no1:User[]=[];
  txtsearch:string="";
  constructor(public data1:UserserviceService,public _router:Router) { }

  ngOnInit() {
    this.data1.getAllUsers().subscribe(
      (data:any)=>{
        this.users=data;
        this.users1=data;
      
      }
    );
  }
editUser(item){
 
  this._router.navigate(['/edituser',item.user_email_id]);
}
  deletuser(item)
  {
    this.data1.deleteUser(item.user_email_id).subscribe(
      (data:any)=>{
        this.users.splice(this.users.indexOf(item),1);
      }
    );
  }
  onNavigate()
  {
    this._router.navigate(['/adduser']);
  }
  onSearch()
  {
    if(this.txtsearch!='')
    {
      this.users=this.users1.filter((x)=>x.user_name.indexOf(this.txtsearch)!==-1);
      
    }
    else
    {
      this.users=this.users1;
      
    }
  }
 

}
