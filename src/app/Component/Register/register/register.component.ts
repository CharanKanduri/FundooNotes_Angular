import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fieldTextType!: boolean;
  registerForm !: FormGroup;
  constructor(private userService:UserServiceService, private snackBar:MatSnackBar, private router:Router){}
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
Register()
  {
    this.userService.Register(this.registerForm.value)
    .subscribe((result:any)=>{
      this.snackBar.open(`${result.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
        if(result.status == true)
        {
          this.router.navigate(['/login']);
        }
    },error => {  
      this.snackBar.open(`${error.error.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    })
}
}
