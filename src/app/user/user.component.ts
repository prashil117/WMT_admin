import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { User } from "./userc";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users:User[]=[];
  constructor(public data1:UserserviceService) { }

  ngOnInit() {
    this.data1.getAllUsers().subscribe(
      (data:any)=>{
        this.users=data;
      }
    );
  }

}
