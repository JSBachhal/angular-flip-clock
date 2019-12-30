

# JSBAngularFlipClock

* A simple Number Counter Commponent to be used with Angular.
* It is developed using `Angular >=8.0.0` and its newly introduced `ng g library` schematics.
* This library is part of JSBNumberCounter project and it is generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.
* Library location: `projects/jsb-angular-flip-clock` directory of this repository.

## Examples/Demo

* A simple Example can be found under `src/app` directory of this repository.

## Installation

`npm i jsb-angular-flip-clock`

## Demo 
[App Demo](https://stackblitz.com/github/JSBachhal/JSB-NumberCounter)

## API

`import { JSBAngularFlipClockModule } from 'jsb-angular-flip-clock'`<br>
`selector: JSB-flipclock`

### @Inputs()

| Input            | Type    | Required                   | Description                                                                                               |
| ---------------- | ------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| HoursTensPlace       | number  | **YES**                    | the Number Data to be disaplayed.                                                                         |
| HoursOnesPlace       | number  | **YES**                    | the Number Data to be disaplayed.                                                                         |
| MinutesTensPlace       | number  | **YES**                    | the Number Data to be disaplayed.                                                                         |
| MinutesOnesPlace       | number  | **YES**                    | the Number Data to be disaplayed.                                                                         |
| SecondsTensPlace       | number  | **YES**                    | the Number Data to be disaplayed.                                                                         |
| SecondsOnesPlace       | number  | **YES**                    | the Number Data to be disaplayed.         |


## Usage

1) Register the `JSBNumCounterModule` in your app module.
 > `import { JSBAngularFlipClockModule } from 'jsb-angular-flip-clock'`

 ```typescript
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
 ```

 2) Use the selector `(JSBNumCounter)` in your component.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <JSB-flipclock 


[HoursTensPlace]='HoursTensPlace'
[HoursOnesPlace]='HoursOnesPlace'
[MinutesTensPlace]='MinutesTensPlace'
[MinutesOnesPlace]='MinutesOnesPlace'
[SecondsTensPlace]='SecondsTensPlace'
[SecondsOnesPlace]='SecondsOnesPlace'

></JSB-flipclock>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-flip-clock';
  HoursTensPlace: number = 0;
  HoursOnesPlace: number = 0;
  MinutesTensPlace: number = 0;
  MinutesOnesPlace: number = 0;
  SecondsTensPlace: number = 0;
  SecondsOnesPlace: number = 0;
  ngOnInit() {

    setInterval
      (_ => {
        this.HoursTensPlace=Math.floor(Math.random() * 9) + 1;
        this.HoursOnesPlace=Math.floor(Math.random() * 9) + 1;
        this.MinutesTensPlace=Math.floor(Math.random() * 9) + 1;
        this.MinutesOnesPlace=Math.floor(Math.random() * 9) + 1;
        this.SecondsTensPlace=Math.floor(Math.random() * 9) + 1;
        this.SecondsOnesPlace=Math.floor(Math.random() * 9) + 1;

      }, 1000);

  }
}
```
![Screenshot](https://github.com/JSBDev/JSB-NumberCounter/blob/master/src/assets/screenshot.PNG?raw=true)
