import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {}

  //adding the api url
  readonly APIUrl = 'https://localhost:44372/api';

  getUsersList(): Observable<any[]> {
    //get all users
    return this.http.get<any>(this.APIUrl + '/Users');
  }

  //add users
  addUser(val: any) {
    return this.http.post(this.APIUrl + '/Users', val);
  }


  addOrder(val: any) {
    return this.http.post(this.APIUrl + '/Orders', val);
  }

}
