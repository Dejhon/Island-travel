import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExploreService } from 'src/app/Services/explore.service';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  searchText:any;
  filterLocation:any;
  tour:any;
  filter:any="Filter By Location"

  constructor(private http:HttpClient, private Explore:ExploreService) {
    this.Explore.Explore().subscribe((data)=>{
        this.tour = data;
    })
   }

  ngOnInit(): void {
  }

}
