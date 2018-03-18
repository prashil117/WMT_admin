import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Traveler } from './travelerc';
@Injectable()
export class TravelerserviceService {

  
  public url:string="http://localhost:3000/travellers/";
  public url1:string="http://localhost:3000/deletealltrav";
  constructor(public _http:HttpClient) { }

  content:string="Content-Type";
  header:string="application/json";
  getAlltraveller()
  {
    return this._http.get<Traveler>(this.url);
    //hkbdhkgbsrgbrgnrlrjl
  }
  gettravellerById(id){
    
        return this._http.get<Traveler[]>(this.url+id);
      }
  deleteTraveller(id:number){
    return this._http.delete(this.url+id,{headers:new HttpHeaders().set(this.content,this.header)});
  }
  /*addTraveler(item)
  {
    let body=JSON.stringify(item);
  return this._http.post(this.url,body,{headers: new HttpHeaders().set(this.content,this.header)});
  }*/
  addTraveler(item:FormData)
  {
   // let body=JSON.stringify(item);
  //return this._http.post(this.url,body,{headers: new HttpHeaders().set(this.content,this.header)});
  return this._http.post(this.url,item);
  }
  editTraveler(email,item){
    let body = JSON.stringify(item);
    return this._http.put(this.url+email, body, { headers: new HttpHeaders().set(this.content, this.header) });
 
  }
  deleteAllTraveler(item:Traveler[])
  {
    let body = JSON.stringify(item);
    return this._http.post(this.url1, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }
}
