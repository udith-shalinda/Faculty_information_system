import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signin:FormGroup

  constructor() { }

  ngOnInit() {
    this.signin = new FormGroup({
      'username':new FormControl(),
      'password':new FormControl()
    })
  }

}
