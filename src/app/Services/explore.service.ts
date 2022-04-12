import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private http:HttpClient) { }

  url ="http://localhost:3000/Explore";

  Explore(){
    return this.http.get(this.url)
  }
}
