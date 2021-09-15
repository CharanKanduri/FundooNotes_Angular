import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  ngOnInit() {
    this.registerForm = new FormGroup({
    'firstName':new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
    'lastName' :new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
    'eMail':new FormControl('',[Validators.required,Validators.email]),
    'password':new FormControl('',[Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$'),Validators.minLength(8)]),
    'conformpassword': new FormControl('',Validators.required)  
  });
}
getErrorMessage(inputName:string) {
  let minLen = inputName=="password"?8:3;
  
  if (this.registerForm.controls[`${inputName}`].hasError('required')) {
    return 'You must enter a value';
  }
  else if(this.registerForm.controls[`${inputName}`].hasError('minlength')){
    return `minimum ${minLen} characters`;
  }
  else if(this.registerForm.controls[`${inputName}`].hasError('email'))
  {
    return `${inputName} is invalid`;
  }
  return this.registerForm.controls[`${inputName}`].hasError('pattern') ? `${inputName} is invalid` : '';
}
}
