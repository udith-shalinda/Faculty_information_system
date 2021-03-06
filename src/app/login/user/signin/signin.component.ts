import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {  Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signin:FormGroup

  constructor(private router:Router,private route:ActivatedRoute,private loginservice:LoginService) { }

  ngOnInit() {
    this.signin = new FormGroup({
      'username':new FormControl(),
      'password':new FormControl()
    })
  }
  trySignin(){
    if(this.signin.value.username== "username" && this.signin.value.password== "password"){
      this.loginservice.login=true;
      this.router.navigate(['/profile'],{relativeTo:this.route});
    }
  }

}
