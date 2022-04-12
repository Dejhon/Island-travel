import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @ViewChild('left', { read: ElementRef }) public left!: ElementRef<any>;


  scrollLeft(){
      this.left.nativeElement.scrollLeft -= 260;
  }

  scrollRight(){
      this.left.nativeElement.scrollLeft += 270;
  }

  ngOnInit(): void {
  }

}
