import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-time-box',
  templateUrl: './time-box.component.html',
  styleUrls: ['./time-box.component.css']
})


export class TimeBoxComponent implements OnChanges {
  @Input() currentTimeFull: number;
  digits: Digit[] = [];
  digitHeight: number = 100;



  constructor() { 
    
  }
  ngOnInit(): void {
    this.digits.push({value: this.currentTimeFull+99, top: 100});
    this.digits.push({value: this.currentTimeFull, top: 0});
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentTimeFull']) {
    const newDigit: Digit = {
      value: changes['currentTimeFull'].currentValue,
      top: -100,
    };
    
    this.digits.unshift(newDigit);

    // Update top position of existing digits
    this.updateTopPositions();

    // Remove digits that have moved out of view
    if (this.digits.length > 1) {
      this.digits.pop();
    }
  }
  
  }
            updateTopPositions(): void {
              // Update top position of all digits based on their index
              this.digits.forEach((digit, index) => {
                digit.top = (index * this.digitHeight) - 100;
              }); 
            }
 
}



interface Digit {
  value: number;
  top: number;
}
