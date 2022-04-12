import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.css']
})
export class NewHeaderComponent implements OnInit {

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
