import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Faculty Information System';
  
  constructor(private loginservice:LoginService,private route:ActivatedRoute,private router:Router){}
  login = this.loginservice.login;

  logoutmethod(){
    this.loginservice.login=false;
    this.router.navigate(['/'],{relativeTo:this.route});
  }
}
