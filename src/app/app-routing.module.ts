import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import { UserComponent } from './login/user/user.component';
import { SigninComponent } from './login/user/signin/signin.component';
import { SignupComponent } from './login/user/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultComponent } from './profile/result/result.component';

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
},
{
  path:'',
  component:HomeComponent
},{
  path:'profile',
  component:ProfileComponent,
  children:[{
    path:'result',
    component:ResultComponent
  }]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
