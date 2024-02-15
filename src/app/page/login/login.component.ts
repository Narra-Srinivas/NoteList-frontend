import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginDetails: string = '';

  constructor(private httpClient: HttpClient, private router: Router, private tokenService: TokenService){}

  private baseURL = "http://localhost:8080/auth/login";

  login() {
          if (this.username.trim() !== '' && this.password.trim() !== '') {
                const logindetails = { username: this.username, password: this.password };
                this.httpClient.post<HttpResponse<String>>(this.baseURL, logindetails, {observe: 'response', responseType: 'text' as 'json'})
                  .subscribe(response => {
                        console.log(response.status);
                        this.tokenService.setToken = response.body as unknown as string;
                        console.log(this.tokenService.getToken);
                        this.router.navigate(['']);
                        }, (error) => {
                          alert("Invalid credentials");
                        })
                        
             }
            
          };
    
          

  }

