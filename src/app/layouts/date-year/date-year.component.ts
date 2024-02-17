import { Component } from '@angular/core';

@Component({
  selector: 'app-date-year',
  templateUrl: './date-year.component.html',
  styleUrls: ['./date-year.component.css']
})
export class DateYearComponent {
date: number;
monthName: string;
year: number;
day: string;
constructor() {
  let dateNow = new Date();
  this.date = dateNow.getDate();
  let day = dateNow.getDay();
  let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "Saturday"];
  this.day = dayNames[day];
  let month = dateNow.getMonth();
  let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  this.monthName = monthNames[month];
  this.year = dateNow.getFullYear(); 
}

}
