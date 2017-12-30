import { User } from './../user/userc';
import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {LoginDataService  } from '../login-data.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './loginc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email_id:string="jollyprashil@gmail.com";
  password:string="prashil117";


  constructor(public _router:Router, public data:LoginDataService) { }

  ngOnInit() {
  }
  onLogin() {
    let item = new User(this.email_id,this.password,'', '', '', '', '','');
    this.data.login(item).subscribe(
      (data1:User[]) => {
        console.log(data1);
        if (data1.length==1) {
          localStorage.setItem('Email',this.email_id);
        this._router.navigate(['/dashboard']);
          
        }
        else {
          
         alert("Something Wrong");
        }

      },
      function (e) {
        alert(e);
      }
    );
  }
}


