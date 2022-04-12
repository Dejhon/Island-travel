import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Island-travel';

  scrollTop(){
    window.scroll(0,0)
  }

  ngOnInit(){
    AOS.init();
 }
}
