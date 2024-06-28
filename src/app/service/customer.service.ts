import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) {

   }

   GetData(){
    return this.http.get("https://localhost:7094/api/Customer")
   }

   SaveCustomer(data:any){
    return this.http.post("https://localhost:7094/api/Customer",data)
   }
}

