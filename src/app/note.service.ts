import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8080/api/v1/practice1";


  getNotes(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}`)
  }
  addNote(newNote: { message: string }): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, newNote);
  }
  deleteNote(id: number) {
    console.log("delete in note-service");
    this.httpClient.delete(`${this.baseURL}/${id}`).subscribe(
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
