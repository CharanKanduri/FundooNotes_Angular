import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteserviceService } from 'src/app/Services/NotesService/noteservice.service';
import { AddNoteComponent } from '../../add-note/add-note/add-note.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {

  archive = false;
  constructor(private addNote: AddNoteComponent, private noteService: NoteserviceService, private snackBar: MatSnackBar, public dialog: MatDialog) { }
  colors: any[] = [
    {
      "color": "#fff",
      "toolTip": "default",
      "icon": true
    },
    {
      "color": "#F28B82",
      "toolTip": "Red",
      "icon": false
    },
    {
      "color": "#FBBC04",
      "toolTip": "Orange"
    },
    {
      "color": "#FFF475",
      "toolTip": "Yellow",
      "icon": false
    },
    {
      "color": "#CCFF90",
      "toolTip": "Green",
      "icon": false
    },
    {
      "color": "#A7FFEB",
      "toolTip": "Teal",
      "icon": false
    },
    {
      "color": "#CBF0F8",
      "toolTip": "Blue",
      "icon": false
    },
    {
      "color": "#AECBFA",
      "toolTip": "Dark Blue",
      "icon": false
    },
    {
      "color": "#D7AEFB",
      "toolTip": "Purple",
      "icon": false
    },
    {
      "color": "#FDCFE8",
      "toolTip": "Pink",
      "icon": false
    },
    {
      "color": "#E6C9A8",
      "toolTip": "Brown",
      "icon": false
    },
    {
      "color": "#E8EAED",
      "toolTip": "Gray",
      "icon": false
    }
  ];
  reminders: any[] = [
    {
      "Text": "Later Today",
      "Time": "8:00 PM"
    },
    {
      "Text": "Tommorow",
      "Time": "8:00 AM"
    },
    {
      "Text": "Next Week",
      "Time": "8:00 AM"
    }
  ];

  ngOnInit(): void {
  }
  Close() {
    this.addNote.bigNote = false;
    this.addNote.smallNote = true;
    let noteColor = this.addNote.noteColor=="white"?null:this.addNote.noteColor;
    let noteReminder = this.addNote.Reminder==""?null:this.addNote.Reminder;
    const data = {
      Title:this.addNote.NoteForm.value.Title,
      Description:this.addNote.NoteForm.value.Description,
      Color:noteColor,
      Reminder:noteReminder,
      Pin:this.addNote.pinned,
      Archive:this.archive
    }
    this.noteService.CreateNote(data)
      .subscribe((result: any) => {
        this.snackBar.open(`${result.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
        this.addNote.noteColor="#fff";
        this.archive=false;
        this.addNote.Reminder="";
        this.addNote.pinned = false;
      },error => {
        this.snackBar.open(`${error.error.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
      });
    this.addNote.NoteForm.reset();
  }
  ChangeColor(color: any) {
    this.addNote.noteColor = color;
    for (var val of this.colors)
      val.icon = val.color == color ? true : false;
  }
  AddReminder(rem: any) {
    this.addNote.isReminder = true;
    this.addNote.Reminder = `${rem.Text} ${rem.Time}`
  }

}
