import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {GetnoteComponent} from 'src/app/Component/get-note/getnote/getnote.component'

@Component({
  selector: 'app-get-note-icons',
  templateUrl: './get-note-icons.component.html',
  styleUrls: ['./get-note-icons.component.scss']
})
export class GetNoteIconsComponent implements OnInit {
  archive = false;
  constructor(private getNote:GetnoteComponent,private snackBar: MatSnackBar) { }
  reminders: any[] = [{"Text": "Later Today","Time":"1:00"},{"Text": "Tommorow","Time":"8:00"},{"Text": "Next Week","Time":"mon,9:00"}];
  colors: any[] = [{ "color": "#fff", "toolTip": "default", "check": true },{"color": "#F28B82","toolTip": "Red","check": false},{"color": "#FFF475","toolTip": "Yellow","check": false},{"color": "#FBBC04","toolTip": "Orange","check": false},{"color": "#CCFF90","toolTip": "Green","check": false},{"color": "#AECBFA","toolTip": "Dark Blue","check": false},{"color": "#CBF0F8","toolTip": "Blue","check": false},{"color": "#E6C9A8","toolTip": "Brown","check": false}];

  ngOnInit(): void {
  }
  AddReminder(rem: any) {
    this.getNote.isReminder = true;
    this.getNote.Reminder = `${rem.Text},${rem.Time}`
  }
  ChangeColor(color: any) {
    this.getNote.noteColor = color;
    for (var val of this.colors)
      val.icon = val.color == color ? true : false;
  }
  archiveNote()
  {
    this.snackBar.open(`${this.archive?'Note Unarchived':'Note Archived'}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    this.archive=!this.archive;
  }


}
