import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient, private tokenservice: TokenService) { }

  private baseURL = "http://localhost:8080/api/v1/practice1";


  getNotes(): Observable<any>{
    const token = this.tokenservice.getToken;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.get(`${this.baseURL}`,{headers: headers})
  }
  addNote(newNote: { message: string }): Observable<any> {
    const token = this.tokenservice.getToken;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.post(`${this.baseURL}`,newNote,{headers: headers});
  }
  deleteNote(id: number) {
    console.log("delete in note-service");
    const token = this.tokenservice.getToken;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.httpClient.delete(`${this.baseURL}/${id}`,{headers: headers}).subscribe(
      response => {
        // Handle success
        console.log('Delete request successful:', response);
      },
      error => {
        // Handle error
        console.error('Delete request failed:', error);
      }
    );
  }
}
