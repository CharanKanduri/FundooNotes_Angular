import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CollaboratorComponent>) { }
  AddCollaboratorForm!: FormGroup;
 
  ngOnInit(): void {
    this.AddCollaboratorForm = new FormGroup({
      email: new FormControl()
    });
  }
  close() {
    this.dialogRef.close();
}
}
