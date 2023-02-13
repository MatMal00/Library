import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './modules/home/home.component';
import { RentalComponent } from './modules/rental/rental.component';
import { ShopComponent } from './modules/shop/shop.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, RentalComponent, ShopComponent],
  imports: [BrowserModule, HttpClientModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, HomeComponent, RentalComponent, ShopComponent],
})
export class AppModule {}
