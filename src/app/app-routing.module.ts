import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './admin/pages/buy/buy.component';
import { RentComponent } from './admin/pages/rent/rent.component';
import { SellComponent } from './admin/pages/sell/sell.component';
import { SigninComponent } from './admin/pages/signin/signin.component';
import { RegisterComponent } from './admin/pages/register/register.component';

const routes: Routes = [
  { path: 'buy', component: BuyComponent },
  { path: 'rent', component: RentComponent },
  { path: 'sell', component: SellComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
