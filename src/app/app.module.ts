import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdvertiseModule } from './advertise/advertise.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdvertiseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
