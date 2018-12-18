import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NoteItem } from 'src/app/models/note-item';

@Component({
  selector: 'app-dialog-note',
  templateUrl: './dialog-note.component.html',
  styleUrls: ['./dialog-note.component.css']
})
export class DialogNoteComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NoteItem) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
