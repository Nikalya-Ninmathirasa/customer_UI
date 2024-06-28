import { Component } from '@angular/core';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpReq';

  Customers:any;

  constructor(private service:CustomerService){
     this.service.GetData().subscribe(data=>{
      // this.Customers= data;
     })
    }

     SaveCustomer(data:any){
         this.service.SaveCustomer(data).subscribe(value=>{
           this.Customers=value;
         })
         
     }
  }

