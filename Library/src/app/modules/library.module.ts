import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared.module';
import { LibraryRoutingModule } from './library-routing.module';
import { RouterModule } from '@angular/router';
import { RentalComponent } from './rental/rental.component';


@NgModule({
  declarations: [HomeComponent, RentalComponent],
  imports: [CommonModule, SharedModule, LibraryRoutingModule, RouterModule],
  bootstrap: [AppComponent],
})
export class LibraryModule {}
