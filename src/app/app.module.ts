import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BuyComponent } from './admin/pages/buy/buy.component';
import { RentComponent } from './admin/pages/rent/rent.component';
import { SellComponent } from './admin/pages/sell/sell.component';
import { SigninComponent } from './admin/pages/signin/signin.component';
import { RegisterComponent } from './admin/pages/register/register.component';
import { NavbarComponent } from './admin/components/navbar/navbar.component';
import { ForgotPasswordComponent } from './admin/pages/forgot-password/forgot-password.component';
import { NotFoundComponent } from './admin/pages/not-found/not-found.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomesComponent } from './admin/pages/homes/homes.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyComponent,
    RentComponent,
    SellComponent,
    SigninComponent,
    RegisterComponent,
    NavbarComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    HomesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
