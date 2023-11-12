import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";

const routes: Routes = [
  { path:"", component: LoginComponent},
  { path: "id", component: RegisterComponent},
  { path: "new", component: UserDetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

