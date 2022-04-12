import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddCustomerService {
url="http://localhost:3000/Customer";

  constructor(private Http:HttpClient) { }

  addCustomer(data:any){
    return this.Http.post<any>("http://localhost:3000/Customer", data);
  }
}
