import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from 'src/app/note.service';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  newNoteText: string = '';

  constructor(private noteService: NoteService) {}

  addNote() {
    // Check if newNoteText is not empty before making the POST request
    if (this.newNoteText.trim() !== '') {
      const newNote = { message: this.newNoteText };
      this.noteService.addNote(newNote).subscribe(() => {
        // Clear the input field after successful POST
        this.newNoteText = '';
      });
    }
  }

}
