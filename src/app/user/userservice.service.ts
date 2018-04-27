import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './userc';


@Injectable()
export class UserserviceService {

  public url: string = "https://wishmytrip.herokuapp.com/users/";
  public url1:string="https://wishmytrip.herokuapp.com/deletalluser/";
  public url2: string = "https://wishmytrip.herokuapp.com/userimgu/";
  constructor(public _http: HttpClient) { }
  content: string = "Content-Type";
  header: string = "application/json";
  getAllUsers() {
    return this._http.get<User>(this.url);
  }
  getUserById(id){

    return this._http.get<User[]>(this.url+id);
  }
  deleteUser(id: string) {
    return this._http.delete(this.url + id, { headers: new HttpHeaders().set(this.content, this.header) });
  }
  /*addUser(item) {

    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }*/
  addUser(item:FormData) {
    
      //  let body = JSON.stringify(item);
        return this._http.post(this.url,item);
      }
  editUser(id,item){
    let body = JSON.stringify(item);
    return this._http.put(this.url+id, body, { headers: new HttpHeaders().set(this.content, this.header) });
 
  }

  editUserimg(item: FormData) {
    //  let body=JSON.stringify(hotel);
    return this._http.put(this.url2, item);
  }

  deleteAllUser(item:User[])
  {
    let body = JSON.stringify(item);
    return this._http.post(this.url1, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }
}
