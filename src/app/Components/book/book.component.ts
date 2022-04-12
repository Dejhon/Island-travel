import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common'
import { Router} from '@angular/router';
import { RxwebValidators } from "@rxweb/reactive-form-validators"


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  // minimumDate = new Date();
  grandTotal:any;
  usQuote:any;
  cardExpired = false;

  constructor(private route:Router,public datepipe: DatePipe) { }

  @ViewChild('expire', { read: ElementRef }) public expire!: ElementRef<any>;

  creditCardTypes = [
    "Visa",

    "AmericanExpress",

    "Maestro",

    "JCB",

    "Discover",

    "DinersClub",

    "MasterCard"
]


  bookingForm = new FormGroup({
    fullName: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/)]),
    pickUp: new FormControl('',Validators.required),
    destination: new FormControl('',Validators.required),
    adult: new FormControl('',Validators.required),
    children: new FormControl('',Validators.required),
    ddate: new FormControl('',Validators.required),
    cardType:new FormControl('Visa',Validators.required),
    cardNumber: new FormControl('',[Validators.required,RxwebValidators.creditCard ({fieldName:'cardType'})]),
    cvcNumber: new FormControl('',Validators.required),
    monthExpire: new FormControl('',Validators.required),
    yearExpire:new FormControl('',Validators.required)
    // cardExpire:new  FormControl('',[Validators.required,Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)])
  })

  get fullName(){
    return this.bookingForm.get('fullName')
  }

  get email(){
    return this.bookingForm.get('email')
  }

  get pickUp(){
    return this.bookingForm.get('pickUp')
  }

  get destination(){
    return this.bookingForm.get('destination')
  }

  get adult(){
    return this.bookingForm.get('adult')
  }

  get children(){
    return this.bookingForm.get('children')
  }

  get ddate(){
    return this.bookingForm.get('ddate')
  }

  get cardType(){
    return this.bookingForm.get('cardType')
  }

  get cardNumber(){
    return this.bookingForm.get('cardNumber')
  }

  get cvcNumber(){
    return this.bookingForm.get('cvcNumber')
  }

  get monthExpire(){
    return this.bookingForm.get('monthExpire')
  }

  get yearExpire(){
    return this.bookingForm.get('yearExpire')
  }

  grandTotalCalc(){
     const adultPrice = this.destination?.value;
     const childrenPrice = this.destination?.value / 2;
     const childrenTotal = childrenPrice * this.children?.value;
     const adultTotal = adultPrice * this.adult?.value;

     if(this.children?.value >= 1){
      this.grandTotal =childrenTotal + adultTotal
      this.usQuote = this.grandTotal * 151;
     }else{
       this.grandTotal = adultTotal;
       this.usQuote = this.grandTotal * 151;
     }
  }

  onSubmit():any{

    let inputDate = (new Date(this.ddate?.value));
    let today = new Date();
    let expired = new Date() > new Date(` 1/ ${this.monthExpire?.value}/${this.yearExpire?.value}`);
    let monthCheck = (new Date().getMonth() +1) > Number(this.monthExpire?.value);

    if(inputDate <= today){
      alert("Date For Trip Cannot Be Entered")
    }else

    if(expired && monthCheck && this.bookingForm?.valid){
       alert('Card Expired')
       return this.cardExpired = true;
    }else{
      alert("TOUR BOOKED SUCCESSFULLY")
        this.bookingForm.reset();
        this.route.navigate(['/home'])
    }
  }

  dateCheck():any{
    let inputDate = new Date(this.ddate?.value).toLocaleDateString();
    let today = new Date().toLocaleDateString();

    console.log(inputDate)
    console.log(today)

    if(inputDate >= today){
      return true;
    }else{
      alert("Date For Trip Cannot Be Entered")
    }
  }

  ngOnInit(): void {
  }

}
