import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.css']
})
export class ContactHeaderComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

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
