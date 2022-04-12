import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url ="http://localhost:3000/Customer"
  constructor(private Http:HttpClient) { }

  loginUser(){
    return this.Http.get(this.url)
  }
}
