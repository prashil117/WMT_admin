import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Traveler } from './travelerc';
@Injectable()
export class TravelerserviceService {

  
  public url:string="http://localhost:3000/travellers/";
  constructor(public _http:HttpClient) { }

  getAlltraveller()
  {
    return this._http.get<Traveler>(this.url);
  }
}
