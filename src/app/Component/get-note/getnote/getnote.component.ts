import { Component,Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {NoteserviceService} from 'src/app/Services/NotesService/noteservice.service';
import {UpdateNotesComponent} from '../../update-note/update-notes/update-notes.component';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})
export class GetnoteComponent implements OnInit {
  
  constructor(private snackBar:MatSnackBar,private notesService:NoteserviceService, public dialog: MatDialog) { }
  noteColor= "#fff";
  pinned = false;
  isReminder=false;
  Reminder="";
  hovered = false;
  isPin:boolean = true;
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
    console.log("getnote");
     this.notesService.GetNotes().subscribe((result: any) => {
      this.userNotes=result.data;
      for(var i of this.userNotes)
      {
        if(i.pin == true)
        {
          this.isPin= true;
          break;
        }
      }
      console.log(this.userNotes);
    });
   }
   openDialog(note:any)
   {
     console.log(note);
     
     const dialogConfig = new MatDialogConfig();
     this.dialog.open(UpdateNotesComponent, {
       panelClass: 'dialog-container-custom',
        data: {
       data: note
     }});
   }
}
