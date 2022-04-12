import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExploreService } from 'src/app/Services/explore.service';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-explore-header',
  templateUrl: './explore-header.component.html',
  styleUrls: ['./explore-header.component.css']
})
export class ExploreHeaderComponent implements OnInit {

  constructor(private http:HttpClient, private Explore:ExploreService, private dialog:MatDialog) {
    this.Explore.Explore().subscribe((data)=>{
        this.tour = data;
    })
   }

  searchText:any;
  filterLocation:any;
  filter:any="Filter By Location"
  tour:any;

  openLogin(){
    this.dialog.open(LoginComponent,{
      width:'26%',
      height:'48%'
    })
  }

  openSignUp(){
    this.dialog.open(SignUpComponent,{
      width:'26%',
      height:'48%'
    })
  }

  ngOnInit(): void {
  }

}
