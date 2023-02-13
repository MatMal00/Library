import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LibraryModule } from './modules/library.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SharedModule, AppRoutingModule, LibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
