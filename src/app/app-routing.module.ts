import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Component/Register/register/register.component';
import{LoginComponent} from './Component/Login/login/login.component';
const routes: Routes = [
  {path:'register',component:RegisterComponent,
  },
  {path:'login',component:LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
