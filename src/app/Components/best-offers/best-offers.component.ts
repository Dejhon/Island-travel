import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/Services/destination.service';

@Component({
  selector: 'app-best-offers',
  templateUrl: './best-offers.component.html',
  styleUrls: ['./best-offers.component.css']
})
export class BestOffersComponent implements OnInit {

  offer:any;

  constructor(private Destination:DestinationService,private http:HttpClient) {
    this.Destination.company().subscribe((data)=>{
        this.offer=data;
      }
    )
   }

  ngOnInit(): void {
  }

}
