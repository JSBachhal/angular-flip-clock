import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JSBAngularFlipClockModule } from 'projects/jsb-angular-flip-clock/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JSBAngularFlipClockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
