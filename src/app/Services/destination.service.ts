import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private Http:HttpClient) { }

  url="http://localhost:3000/Destination";

  company(){
      return this.Http.get(this.url);
  }
}
