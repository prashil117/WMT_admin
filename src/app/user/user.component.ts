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
  constructor(public data1:UserserviceService,public _router:Router) { }

  ngOnInit() {
    this.data1.getAllUsers().subscribe(
      (data:any)=>{
        this.users=data;
      }
    );
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

}
