import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Component/Register/register/register.component';
import{LoginComponent} from './Component/Login/login/login.component';
import {ForgetPasswordComponent} from './Component/Forgot-password/forget-password/forget-password.component';
const routes: Routes = [
  {path:'register',component:RegisterComponent,
  },
  {path:'login',component:LoginComponent,
  },
  {path:'ForgetPassword',component:ForgetPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
