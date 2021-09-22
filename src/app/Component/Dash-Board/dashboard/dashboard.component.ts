import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened: boolean = true;
  constructor(private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  signout()
  {
    localStorage.clear();
    this.snackBar.open(``, 'Signout Successful', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });
  }
}
