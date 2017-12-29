import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Hotels } from './hotel/hotelc';

@Injectable()
export class HotelDataService {
  public url:string="http://localhost:3000/hotel/";
  content:string="Content-Type";
  header:string="application/json";
  constructor(public _http:HttpClient) { }

  getAllHotels(){
    return this._http.get<Hotels>(this.url);
  }
  addHotel(hotel:Hotels){
    let body=JSON.stringify(hotel);
    return this._http.post(this.url,body,{headers:new HttpHeaders().set(this.content,this.header)});
  }
  deleteHotel(id:string){
    return this._http.delete(this.url+id,{headers:new HttpHeaders().set(this.content,this.header)});
  }
  updateHotel(hotel:Hotels){
    let body=JSON.stringify(hotel);
    return this._http.put(this.url+hotel.hotel_img,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
}
