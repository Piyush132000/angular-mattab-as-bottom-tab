import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './code/code.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { PrizeComponent } from './prize/prize.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , data: {title: 'Home'} },
  { path: 'prize', component: PrizeComponent, data: {title: 'Prize'} },
  { path: 'offer', component: OfferComponent, data: {title: 'Offer'} },
  { path: 'code', component: CodeComponent, data: {title: 'Code'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
