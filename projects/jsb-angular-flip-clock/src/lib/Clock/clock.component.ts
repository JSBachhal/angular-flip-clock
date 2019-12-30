import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'JSB-flipclock',
    templateUrl: './clock.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JSBClockComponent {
    @Input() HoursTensPlace: number = 0;
    @Input() HoursOnesPlace: number = 0;
    @Input() MinutesTensPlace: number = 0;
    @Input() MinutesOnesPlace: number = 0;
    @Input() SecondsTensPlace: number = 0;
    @Input() SecondsOnesPlace: number = 0;
}

@Component({
    selector: 'JSB-flipclock-label',
    template: `<span class="JSB-flip-clock-divider" >
    <span class="JSB-flip-clock-dot JSB-flip-clock-dot-top"></span>
    <span class="JSB-flip-clock-dot JSB-flip-clock-dot-bottom"></span>
  </span>`,
    styles: [`
    
  .JSB-flip-clock-divider {
    float: left;
    display: inline-block;
    position: relative;
    width: 20px;
    height: 100px;
  }
  
  .JSB-flip-clock-dot {
    display: block;
    background: #323434;
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    left: 5px;
  }
  
  .JSB-flip-clock-dot-top {
    top: 30px;
  }
  
  .JSB-flip-clock-dot-bottom {
    bottom: 30px;
  }`],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JSBClockLabelComponent { }
