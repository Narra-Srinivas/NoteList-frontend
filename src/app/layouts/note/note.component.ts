import { Component, ComponentFactoryResolver, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { NoteService } from 'src/app/note.service';
import { Note } from 'src/app/note';
import { Subscription, interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, OnDestroy {
  notes: Note[];
  private subscription: Subscription;

  constructor(
    private noteService: NoteService
    ) {}


  ngOnInit(): void {
    this.getNotes();
    this.subscription = interval(1000) // 5000 milliseconds = 5 seconds
      .pipe(
        switchMap(() => this.noteService.getNotes()) // Fetch notes every 5 seconds
      )
      .subscribe(notes => {
        this.notes = notes;
      });
}
ngOnDestroy(): void {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}
  getNotes() {
    this.noteService.getNotes().subscribe(notes => { this.notes = notes});

  }

  deleteNote(id: number) {
    console.log("delete in note component");
    this.noteService.deleteNote(id);
  }
  
}
