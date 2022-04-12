import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddCustomerService } from 'src/app/Services/add-customer.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private Http: HttpClient, private Customer: AddCustomerService,private dialog:MatDialog) { }

  show = false;

  view(){
    this.show = !this.show
  }

  openLogin(){
    this.dialog.open(LoginComponent,{
      width:'26%',
      height:'48%'
    })
  }

  signUp = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/)]),
    password:new FormControl('',[Validators.required])
});

get fullName(){
  return this.signUp.get('fullName');
}

get email(){
  return this.signUp.get('email');
}

get password(){
  return this.signUp.get('password');
}

onSubmit(){

   if(this.signUp.valid){

    this.Http.get<any[]>("http://localhost:3000/Customer").subscribe({
      next:(res:any[])=>{
        let emailExist=false;
        res.forEach(element => {
          // console.log(element)
            if(this.email?.value == element.email){
              alert('THAT EMAIL ALREADY EXIST');
              this.signUp.reset();
              emailExist = true;
            }
        });
          if(emailExist == false){
            this.Customer.addCustomer(this.signUp.value).subscribe({
              next:(res) =>{
                if(this.email == res){
                  // alert('Email already on file');
                }
                alert("SIGN UP SUCCESFUL");
                this.dialog.closeAll()
              },
              error:()=>{
                alert("Error while adding customer");
            }
         });
      }
    }
  });
}
}

  ngOnInit(): void {
  }

}
