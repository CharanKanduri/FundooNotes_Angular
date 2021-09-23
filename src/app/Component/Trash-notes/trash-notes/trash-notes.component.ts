import { Component, OnInit } from '@angular/core';
import {NoteserviceService} from 'src/app/Services/NotesService/noteservice.service'
@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  notes:any=[];
  hovered=false;
  constructor(private noteService:NoteserviceService) { }

  ngOnInit(): void {
    this.Trash();
  }
  Trash()
  {
    console.log("getnote");
    this.noteService.TrashNotes().subscribe((result: any) => {
     this.notes=result.data;
     console.log(this.notes);
   });
  }

}
