
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private tokenService: TokenService, private router: Router){

  }
  redirectToLogin() {
    this.tokenService.clearToken = 'no-token';
    this.router.navigate(['/login']);
  }

}
