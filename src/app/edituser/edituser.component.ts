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
name1:string="";
gender:string="";
mobile1:string="";
address1:string="";
bod1:string="";
img:string="";
email1:string="";

  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:UserserviceService) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
        (para:any)=>{
            this.email=para["email_id"];
            this.email1=this.email;
            console.log(this.email1);
           
        }
    );

    this._data.getUserById(this.email).subscribe(
      (data:User[])=>{
        this.name1=data[0].user_name;
        this.gender=data[0].user_gender;
        this.address1=data[0].user_address;
        this.mobile1=data[0].user_mobile_no;
        this.bod1=data[0].user_DO_B;
        this.img=data[0].user_photo;
        console.log(data);
      }
    );

  }
onUpdate(){
  let user=new User(this.email,'',this.name1,this.address1,this.bod1,this.gender,this.img,this.mobile1);
  this._data.editUser(this.email,user).subscribe(
    ()=>{
      this._router.navigate(['/user']);
    }
  );
}
}
