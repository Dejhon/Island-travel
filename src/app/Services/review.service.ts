import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private Http:HttpClient) { }

  url="http://localhost:3000/Reviews";

    review(){
      return this.Http.get(this.url)
    }
}
