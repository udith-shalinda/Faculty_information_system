import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatToolbarModule, MatSidenavModule, MatSidenavContainer, MatSidenavContent, MatInputModule, MatIconModule, MatCardModule, MatButtonToggleModule} from '@angular/material';
import { UserComponent } from './login/user/user.component';
import { SigninComponent } from './login/user/signin/signin.component';
import { SignupComponent } from './login/user/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SigninComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  
    
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule

   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
