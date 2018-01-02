import { User } from './../user/userc';
import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {LoginDataService  } from '../login-data.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Forget } from './forgetc';
import { UserserviceService } from '../user/userservice.service';
import { EmailserviceService } from './emailservice.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  email:string="";
  msg:string="";
emailId:string='';
  constructor( public _router:Router, public data:LoginDataService,public _data:UserserviceService,public _email:EmailserviceService) { }

  ngOnInit() {
  }
  onSend()
  {
  
    if(this.email=="")
    {
      this.msg="enter email please";
    }
    else
    {
      this._data.getUserById(this.email).subscribe(
        (data:User[])=>{
          if(data.length==1){
            var msg=data[0].user_name+" your pass is "+data[0].user_password;
            console.log(msg);
            this._email.sendMail(new Forget(msg,this.email,"Reseting EMail Password")).subscribe(
              (data:any)=>
              {
                console.log("msg sent");
              }
            );
          }
        }
      );
      
    }
  }

}
