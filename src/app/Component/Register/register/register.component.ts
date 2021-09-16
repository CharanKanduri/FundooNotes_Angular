import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fieldTextType!: boolean;
  registerForm !: FormGroup;
  constructor(){}
  ngOnInit() {
    this.registerForm = new FormGroup({
    'firstName':new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
    'lastName' :new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
    'eMail':new FormControl('',[Validators.required,Validators.email]),
    'password':new FormControl('',[Validators.required]),
    'conformpassword': new FormControl('',Validators.required)  
  });
}
toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}
}
