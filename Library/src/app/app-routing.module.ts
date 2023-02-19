import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { RentalComponent } from './modules/rental/rental.component';
import { ShopComponent } from './modules/shop/shop.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { CreateNewAccountComponent } from './modules/authentication/create-new-account/create-new-account.component';
import { AdminComponent } from './modules/admin/admin.component';
import { ShoppingBasketComponent } from './modules/shopping-basket/shopping-basket.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'Admin',
    component: AdminComponent,
  },
  {
    path: 'Rental',
    component: RentalComponent,
  },
  {
    path: 'Shop',
    component: ShopComponent,
  },
  {
    path: 'ShoppingBasket',
    component: ShoppingBasketComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: CreateNewAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
