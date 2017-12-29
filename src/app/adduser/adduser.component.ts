import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../user/userservice.service';
import { User } from '../user/userc';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  email_id:string="";
  password:string="";
  user_name:string="";
  bod:string="";
  img:string="";
  mobile:string="";
  address:string="";
  gender:string="";
  constructor(public _router:Router,public _data:UserserviceService) { }

  ngOnInit() {
  }
  onAdd(){

    let item=new User(this.email_id,this.password,this.user_name,this.address,this.bod,this.gender,this.img,this.mobile);
    this._data.addUser(item).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/user']);
      }
    );
  }

}
