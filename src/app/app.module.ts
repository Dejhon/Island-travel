import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SiteDetailsComponent } from './Components/site-details/site-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { BestOffersComponent } from './Components/best-offers/best-offers.component';
import { NewHeaderComponent } from './Components/new-header/new-header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReasonsComponent } from './Components/reasons/reasons.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { LoginComponent } from './Components/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ContactComponent } from './Components/contact/contact.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { ContactHeaderComponent } from './Components/contact-header/contact-header.component';
import { ExploreComponent } from './Components/explore/explore.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSelectModule } from '@angular/material/select';
import { ExploreHeaderComponent } from './Components/explore-header/explore-header.component';
import { BookComponent } from './Components/book/book.component';
import { DatePipe } from '@angular/common';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import {MatDatepickerModule,} from '@angular/material/datepicker';
// import { AOS} from 'aos'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteDetailsComponent,
    BestOffersComponent,
    NewHeaderComponent,
    ReasonsComponent,
    ReviewsComponent,
    FooterComponent,
    SignUpComponent,
    CarouselComponent,
    LoginComponent,
    ContactComponent,
    LoadingComponent,
    ContactHeaderComponent,
    ExploreComponent,
    ExploreHeaderComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    RxReactiveFormsModule,
    MatDatepickerModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
