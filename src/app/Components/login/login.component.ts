import { LoginService } from './../../Services/login.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dialog : MatDialog, private Http:HttpClient, private login:LoginService) { }

  show = false;

  view(){
    this.show = !this.show
  }

  openSignUp(){
    this.dialog.open(SignUpComponent,{
      width:'26%',
      height:'48%'
    })
  }

  Login = new FormGroup ({
    email: new FormControl('',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/)]),
    password: new FormControl('',Validators.required)
  })

  get email(){
    return this.Login.get('email');
  }

  get password(){
    return this.Login.get('password');
  }

  onSubmit(){
      if(this.Login.valid){
         this.Http.get<any>("http://localhost:3000/Customer")
         .subscribe(res=>{
           const user = res.find((a:any)=>{
             return a.email === this.email?.value && a.password === this.password?.value
           });
              if(user){
                alert('LOGIN SUCCESSFUL');
                this.dialog.closeAll();
              }else{
                alert('USER NOT FOUND')
                this.Login.reset();
              }
          },
          error=>{
                alert('ERROR WHILE LOGGING IN')
          })
       }
    }//end of onSubmit

  ngOnInit(): void {
  }

}


  //  next:(res:any)=>{
          //    let emailDoesntExist = true;
          //    res.forEach(element => {
          //       if(element === this.email?.value && this.password?.value){
          //         alert('LOGIN SUCCESSFUL');
          //         this.dialog.closeAll();
          //         emailDoesntExist = false;
          //       }

    //     });
    //     if(emailDoesntExist == true){
    //       this.login.loginUser().subscribe({
    //         next:(res)=>{
    //            alert('EMAIL NOT FOUND');
    //            this.Login.reset();
    //         },
    //         error:()=>{
    //           alert('ERROR WHILE LOGGING IN')
    //         }
    //      });
    //     }
    //   }
    // })//end og first get request
