import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Component/Register/register/register.component';
import{LoginComponent} from './Component/Login/login/login.component';
import {ForgetPasswordComponent} from './Component/Forgot-password/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Component/Reset-password/reset-password/reset-password.component';
import { DashboardComponent } from './Component/Dash-Board/dashboard/dashboard.component';
var token:any;
token = localStorage.getItem('token');
const routes: Routes = [
  {path:'register',component:RegisterComponent,
  },
  {path:'login',component:LoginComponent,
  },
  {path:'ForgetPassword',component:ForgetPasswordComponent
  },
  {path:`ResetPassword/${token}`,component:ResetPasswordComponent
  },
  {path:'dashboard',component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
