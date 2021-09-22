import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  smallNote:boolean = true;
  bigNote:boolean = false;
  NoteForm !: FormGroup;
  pinned = false;
  noteColor = "#fff";
  isReminder=false;
  Reminder="";
  constructor(private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.NoteForm = new FormGroup({
      Title: new FormControl(),
      Description:new FormControl()
    });
  }
  showNote()
  {
    this.smallNote = false;
    this.bigNote = true;
  }
  pinNote()
  {
    
      this.pinned=!this.pinned;
    
  }
  RemoveReminder()
  {
    this.isReminder = false;
    this.snackBar.open('Reminder Deleted', '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });
  }
}