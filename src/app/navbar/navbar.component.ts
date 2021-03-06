import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../user/userservice.service';
import { Router } from '@angular/router';
import { User } from '../user/userc';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email:string="";
  name:string="";
  img:string="";

  constructor(public _router:Router,public _data:UserserviceService) { }

  ngOnInit() {
    this.email=localStorage.getItem('Email');

    this._data.getUserById(this.email).subscribe(
      (data:User[])=>{
        this.name=data[0].user_name;
        this.img=data[0].user_photo;
      }
    );
  }

  logout()
  {
    alert("Hello");
   // localStorage.setItem('','');
    this._router.navigate(['/login']);
  }

}
