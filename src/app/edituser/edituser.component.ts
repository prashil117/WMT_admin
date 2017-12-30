import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { UserserviceService } from '../user/userservice.service';
import { User } from "../user/userc";

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
public _subscription:Subscription;
email:string="";
name:string="";
gender:string="";
mobile:string="";
address:string="";
bod:string="";
img:string="";

  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:UserserviceService) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
        (para:any)=>{
            this.email=para["email_id"];
           
        }
    );

    this._data.getUserById(this.email).subscribe(
      (data:User[])=>{
        this.name=data[0].user_name;
        this.gender=data[0].user_gender;
        this.address=data[0].user_address;
        this.mobile=data[0].user_mobile_no;
        this.bod=data[0].user_DO_B;
        this.img=data[0].user_photo;
      }
    );

  }
onUpdate(){
  let user=new User(this.email,'',this.name,this.address,this.bod,this.gender,this.img,this.mobile);
  this._data.editUser(this.email,user).subscribe(
    ()=>{
      this._router.navigate(['/user']);
    }
  );
}
}
