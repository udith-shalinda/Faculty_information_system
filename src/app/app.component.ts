import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Faculty Information System';
  
  constructor(private loginservice:LoginService){}
  login = this.loginservice.login;

  logoutmethod(){
    console.log("logout");
  }
}
