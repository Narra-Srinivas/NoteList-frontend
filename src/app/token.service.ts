import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _token: string = 'token';

  constructor() { }

  set setToken(token: string) {
    localStorage.setItem(this._token, token);
  }

  get getToken(): string | null {
    return localStorage.getItem(this._token);
  }
  set clearToken(clearedToken: string){
    localStorage.setItem(this._token, clearedToken ); 
  }
}
