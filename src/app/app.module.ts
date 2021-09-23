import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Component/Register/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './Component/Login/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ForgetPasswordComponent } from './Component/Forgot-password/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Component/Reset-password/reset-password/reset-password.component';
import { DashboardComponent } from './Component/Dash-Board/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list';
import { AddNoteComponent } from './Component/add-note/add-note/add-note.component';
import { NoteIconsComponent } from './Component/note-icons/note-icons/note-icons.component'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CollaboratorComponent } from './Component/collaborator/collaborator/collaborator.component';
import { GetnoteComponent } from './Component/get-note/getnote/getnote.component';
import { GetNoteIconsComponent } from './Component/get-note-icons/get-note-icons/get-note-icons.component';
import { ArchiveNotesComponent } from './Component/Archive-notes/archive-notes/archive-notes.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    AddNoteComponent,
    NoteIconsComponent,
    CollaboratorComponent,
    GetnoteComponent,
    GetNoteIconsComponent,
    ArchiveNotesComponent,
 
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatTooltipModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
