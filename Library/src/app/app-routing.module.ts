import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { RentalComponent } from './modules/rental/rental.component';
import { ShopComponent } from './modules/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'Rental',
    component: RentalComponent,
  },
  {
    path: 'Shop',
    component: ShopComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
