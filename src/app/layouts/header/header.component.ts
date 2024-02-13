import { Component } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
date: String;
constructor() {
  let dateNow = new Date();
  let day = dateNow.getDate().toString();
  let month = dateNow.getMonth();
  let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  let monthName = monthNames[month];
  let year = dateNow.getFullYear();
  this.date = day + " - " + monthName + " - " + year; 
}



}
