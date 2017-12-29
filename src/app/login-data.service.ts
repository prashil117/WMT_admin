import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from './user/userc';



@Injectable()

export class LoginDataService {
  public url:string="http://localhost:3000/login/";

  constructor(public _http:HttpClient) { }
  login(item)
  {
    let body=JSON.stringify(item);
  
    return this._http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }

}
