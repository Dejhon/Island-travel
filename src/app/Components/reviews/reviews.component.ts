import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/Services/review.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  review:any;

  constructor(private Http: HttpClient, private Review:ReviewService) {
    this.Review.review().subscribe((data)=>{
      this.review = data;
    }
  )
   }

  ngOnInit(): void {
    AOS.init();
  }

}
