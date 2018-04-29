import { User } from './../user/userc';
import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {LoginDataService  } from '../login-data.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './loginc';
import {FormControl} from "@angular/forms";
import { NgProgress } from 'ngx-progressbar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email_id:string;
  pass:string;

  inpemail:string="abc";
  inpPass:string="1234";
  constructor(public _router:Router, public data:LoginDataService,public ngProgress: NgProgress) { }

  ngOnInit() {
    alert("welcome");
  }
  onLogin(login) {
    
    this.ngProgress.start();
    this.email_id=login.value.email_id;
    this.pass=login.value.pass;
    console.log(this.email_id); 
    console.log(this.pass);
    let item = new User(this.email_id,this.pass,'', '', '', '', '','');
    this.data.login(item).subscribe(
      (data1:User[]) => {
        console.log(data1);
        if (data1.length==1) {
          localStorage.setItem('Email',this.email_id);
        this._router.navigate(['/dashboard']);
        this.ngProgress.done();
        }
        else {
          if (this.email_id.length==1) {
              if( this.pass.length!=1)
              {
                this.ngProgress.done();
            alert("password is wrong");
              }
        }else{
          this.ngProgress.done();
              alert("Incorrect Email and Password");   
        }
      }
    },
      function (e) {
        alert(e);
      }
    );
  }

  onAdd(login)
  {
    /*console.log(this.inpemail);
    console.log(this.inpPass);*/
    console.log(login.value.inpemail); 
    console.log(login.value.inpPass);
  }
}


