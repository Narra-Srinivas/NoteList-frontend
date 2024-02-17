import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit{

currentTimeHours10s: number;
currentTimeHours0s: number;
currentTimeMinutes10s: number;
currentTimeMinutes0s: number;
currentTimeSeconds10s: number;
currentTimeSeconds0s: number;

@Input() interval: number = 1000;

ngOnInit(): void {
  this.updateTimeFirstTime(5);
  setInterval(() => this.updateTime(), this.interval);
  
}
updateTimeFirstTime(repeatCount: number) {
  const now = new Date();
  this.currentTimeSeconds0s = now.getSeconds()%10;
  this.currentTimeSeconds10s = Math.floor(now.getSeconds()/10);
  this.currentTimeMinutes0s = now.getMinutes()%10;
  this.currentTimeMinutes10s = Math.floor(now.getMinutes()/10);
  this.currentTimeHours0s = now.getHours()%10;
  this.currentTimeHours10s = Math.floor(now.getHours()/10);
  
}
updateTime(): void {
  const sec = new Date();

  this.currentTimeSeconds0s = (sec.getSeconds()+1)%10;
  sec.setSeconds(sec.getSeconds()+10)
  this.currentTimeSeconds10s = Math.floor(sec.getSeconds()/10);

  const min = new Date();
  this.currentTimeMinutes0s = (min.getMinutes()+1)%10;
  min.setMinutes(min.getMinutes()+10);
  this.currentTimeMinutes10s = Math.floor(min.getMinutes()/10);

  const hour = new Date();
  this.currentTimeHours0s = (hour.getHours()+1)%10;
  hour.setHours(hour.getHours()+10);
  this.currentTimeHours10s = Math.floor(hour.getHours()/10);

}

}
