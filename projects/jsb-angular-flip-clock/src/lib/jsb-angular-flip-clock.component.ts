import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'JSB-flipclock-template',
  templateUrl: './jsb-angular-flip-clock.component.html',
  styles: [`.JSB-flip-clock {
    font: normal 11px 'Helvetica Neue', Helvetica, sans-serif;
    user-select: none;
    text-align: center;
    position: relative;
    width: 100%;
    margin: 1em;
  }
  
  .JSB-flip-clock * {
      box-sizing: border-box;
      backface-visibility: hidden;
  }
  
  .JSB-flip-clock:before,
  .JSB-flip-clock:after {
      content: ' '; /* 1 */
      display: table; /* 2 */
  }
  .JSB-flip-clock:after {
      clear: both;
  }
  
  /* Skeleton */
  .JSB-flip-clock-number {
    position: relative;
    list-style: none;
    float: left;
    margin: 5px;
    width: 60px;
    height: 90px;
    font-size: 80px;
    font-weight: bold;
    line-height: 87px;
    border-radius: 6px;
    background: #000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  }
  
  .JSB-flip-clock-number-digit {
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 87px;
    text-decoration: none !important;
  }
  
  .JSB-flip-clock-number-digit:first-child {
    z-index: 2;
  }
  
  .JSB-flip-clock-card {
    display: block;
    height: 100%;
    perspective: 200px;
    margin: 0 !important;
    overflow: visible !important;
    cursor: default !important;
  }
  
  .JSB-flip-clock-card-up,
  .JSB-flip-clock-card-down {
    z-index: 1;
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    font-size: 80px;
    overflow: hidden;
    outline: 1px solid transparent;
  }
  
  .JSB-flip-clock-card-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  
  .JSB-flip-clock-card-up {
    transform-origin: 50% 100%;
    top: 0;
  }
  
  .JSB-flip-clock-card-up:after {
    content: '';
    position: absolute;
    top: 44px;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 3px;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .JSB-flip-clock-card-down {
    transform-origin: 50% 0;
    bottom: 0;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  
  .JSB-flip-clock-card-value {
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 200%;
    color: #ccc;
    text-shadow: 0 1px 2px #000;
    text-align: center;
    background-color: #333;
    border-radius: 6px;
    font-size: 70px;
  }
  
  .JSB-flip-clock-card-value-up {
    top: 0;
  }
  
  .JSB-flip-clock-card-value-down {
    bottom: 0;
  }
  
  /* PLAY */
  .JSB-flip-clock-number-animated .JSB-flip-clock-number-digit-before {
    z-index: 3;
  }
  
  .JSB-flip-clock-number-animated .JSB-flip-clock-number-digit-active {
    animation: JSBFlipClockDigitZIndex 0.5s 0.5s linear both;
    z-index: 5;
  }
  
  
  
  @keyframes JSBFlipClockDigitZIndex {
    0% {
      z-index: 2;
    }
  
    20% {
      z-index: 4;
    }
  
    100% {
      z-index: 4;
    }
  }
  
  .JSB-flip-clock-number-animated .JSB-flip-clock-number-digit-active .JSB-flip-clock-card-down {
    z-index: 2;
    animation: JSBFlipClockTurnDown 0.5s 0.5s linear both;
  }
  
  @keyframes JSBFlipClockTurnDown {
    0% {
      transform: rotateX(90deg);
    }
  
    100% {
      transform: rotateX(0deg);
    }
  }
  
  .JSB-flip-clock-number-animated .JSB-flip-clock-number-digit-before .JSB-flip-clock-card-up {
    z-index: 2;
    animation: JSBFlipClockTurnUp 0.5s linear both;
  }
  
  @keyframes JSBFlipClockTurnUp {
    0% {
      transform: rotateX(0deg);
    }
  
    100% {
      transform: rotateX(-90deg);
    }
  }
  
  .JSB-flip-clock-number-digit-active {
    z-index: 3;
  }
  
  /* SHADOW */
  .JSB-flip-clock-number-animated .JSB-flip-clock-number-digit-before .JSB-flip-clock-card-up .JSB-flip-clock-card-shadow {
    background: linear, top, rgba(0, 0, 0, 0.1) 0%, black 100%;
    background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%;
    animation: JSBFlipClockShowShadow 0.5s linear both;
  }
  
  .JSB-flip-clock-number-animated .JSB-flip-clock-number-digit-active .JSB-flip-clock-card-up .JSB-flip-clock-card-shadow {
    background: linear, top, rgba(0, 0, 0, 0.1) 0%, black 100%;
    background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%;
    animation: JSBFlipClockHideShadow 0.5s 0.3s linear both;
  }
  
  /*DOWN*/
  .JSB-flip-clock-number-animated .JSB-flip-clock-number-digit-before .JSB-flip-clock-card-down .JSB-flip-clock-card-shadow {
    background: linear, top, black 0%, rgba(0, 0, 0, 0.1) 100%;
    background: linear, to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%;
    animation: JSBFlipClockShowShadow 0.5s linear both;
  }
  
  .JSB-flip-clock-number-animated .JSB-flip-clock-number-digit-active .JSB-flip-clock-card-down .JSB-flip-clock-card-shadow {
    background: linear, top, black 0%, rgba(0, 0, 0, 0.1) 100%;
    background: linear, to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%;
    animation: JSBFlipClockHideShadow 0.5s 0.2s linear both;
  }
  
  @keyframes JSBFlipClockShowShadow {
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  }
  
  @keyframes JSBFlipClockHideShadow {
    0% {
      opacity: 1;
    }
  
    100% {
      opacity: 0;
    }
  }`]
})
export class JSBAngularFlipClockComponent implements OnChanges {
  @Input() value = 0;
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  currentValue: number;
  previousValue: number;

  ngOnChanges(changes: SimpleChanges): void {
      this.currentValue = changes.value.currentValue;
      this.previousValue = changes.value.previousValue;
  }
  
  IsActive(number) {
    return this.currentValue === number;
  }

  IsBefore(number) {
    return this.previousValue !== this.currentValue && number === this.previousValue;
  }

  IsAnimated() {
    return this.previousValue !== this.currentValue;
  }

}


