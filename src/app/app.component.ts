import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
