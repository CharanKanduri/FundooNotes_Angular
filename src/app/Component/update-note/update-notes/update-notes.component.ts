import { Component, OnInit , Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/Services/NotesService/noteservice.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {

  constructor(private snackBar:MatSnackBar,private noteService:NoteserviceService, public dialogRef: MatDialogRef<UpdateNotesComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
  bigNote:boolean = false;
  EditNoteForm !: FormGroup;
  pinned = false;
  noteColor = "#fff";
  isReminder=false;
  Reminder="";
  ngOnInit(): void {
    this.EditNoteForm = new FormGroup({
      Title: new FormControl(),
      Description:new FormControl()
    });
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
  Close(note:any) 
  {
    this.noteService.UpdateNote(note).subscribe();
    this.dialogRef.close();
  }

}
