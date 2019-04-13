import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './login/user/user.component';
import { SigninComponent } from './login/user/signin/signin.component';
import { SignupComponent } from './login/user/signup/signup.component';

const routes: Routes = [{
  path:'login',
  component:UserComponent,
  children:[{
    path:'',
    component:SigninComponent
  },{
    path:'signup',
    component:SignupComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
