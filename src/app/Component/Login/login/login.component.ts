import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm !: FormGroup;
  fieldTextType!: boolean;
  constructor(private userService:UserServiceService, private snackBar:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('',[Validators.required,]),
      password:new FormControl('',[Validators.required])
    });
  }
  Login()
  {
    this.userService.Login(this.LoginForm.value)
    .subscribe((result:any)=>{
      console.log(result);
      
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
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
