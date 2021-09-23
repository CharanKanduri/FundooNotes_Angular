import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {NoteserviceService} from 'src/app/Services/NotesService/noteservice.service';

@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})
export class GetnoteComponent implements OnInit {

  constructor(private snackBar:MatSnackBar,private notesService:NoteserviceService) { }
  noteColor= "#fff";
  pinned = false;
  isReminder=false;
  Reminder="";
  hovered = false;
  userNotes:any = [];

  ngOnInit(): void {
    this.GetNote();
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
  GetNote()
  {
    this.notesService.GetNote()
  .subscribe(
    (status: any) => 
    {
    console.log(status.data);
    this.userNotes=status.data;
    })
  }
}
