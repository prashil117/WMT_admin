import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hotels } from './hotel/hotelc';

@Injectable()
export class HotelDataService {
  public url: string = "http://localhost:3000/hotel/";
  public url1: string = "http://localhost:3000/deletehotels";
  public url2: string = "http://localhost:3000/hotelimgu/";
  content: string = "Content-Type";
  header: string = "application/json";
  constructor(public _http: HttpClient) { }

  getAllHotels() {
    return this._http.get<Hotels>(this.url);
  }
  getHotelById(id) {

    return this._http.get<Hotels[]>(this.url + id);
  }
  addHotel(item: FormData) {
    //  let body=JSON.stringify(hotel);
    return this._http.post(this.url, item);
  }
  deleteHotel(id: string) {
    return this._http.delete(this.url + id, { headers: new HttpHeaders().set(this.content, this.header) });
  }


  editHotel(id, item) {
    let body = JSON.stringify(item);
    return this._http.put(this.url + id, body, { headers: new HttpHeaders().set(this.content, this.header) });

  }

  editHotelimg(item: FormData) {
    //  let body=JSON.stringify(hotel);
    return this._http.put(this.url2, item);
  }
  deleteAllHotels(item: Hotels[]) {
    let body = JSON.stringify(item);
    return this._http.post(this.url1, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }
}
