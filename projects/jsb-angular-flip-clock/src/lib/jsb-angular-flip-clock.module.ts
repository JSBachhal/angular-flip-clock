import { NgModule } from '@angular/core';
import { JSBAngularFlipClockComponent } from './jsb-angular-flip-clock.component';
import { CommonModule } from '@angular/common';
import { JSBClockComponent, JSBClockLabelComponent } from './Clock/clock.component';



@NgModule({
  declarations: [JSBAngularFlipClockComponent,JSBClockComponent,JSBClockLabelComponent],
  imports: [
    CommonModule
  ],
  exports: [JSBAngularFlipClockComponent,JSBClockComponent,JSBClockLabelComponent]
})
export class JSBAngularFlipClockModule { }
