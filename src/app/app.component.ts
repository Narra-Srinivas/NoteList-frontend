import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private tokenService: TokenService) {}
  isRotated: boolean = false;
  toggleRotation(): void {
    this.isRotated = !this.isRotated; 
  }
getCurrentImageUrl() {
throw new Error('Method not implemented.');
}
onNotesUpdated() {

}
  title = 'NotePad';
  imageUrls: string[] = [
    'assets/white.jpg',
    'assets/mountain-peak-alps-7680x4320-11501.jpg',
    'assets/thick-forest-5120x2880-14776.jpg',
    'assets/tropical-beach-5120x2880-14811.jpg',
    'assets/pexels-sohail-nachiti-807598.jpg'
    

  ];
  currentImageIndex: number = 1;

  // Setter method for the background image URL
  set backgroundImageUrl(url: string) {
    document.body.style.backgroundImage = `url(${url})`;
  }

  // Method to change the background image to the next one in the array
  changeBackground(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
    this.backgroundImageUrl = this.imageUrls[this.currentImageIndex];
  }

}
