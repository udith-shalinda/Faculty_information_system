import { Component, OnInit } from '@angular/core';
import {bounceAnimation, fadeInDownOnEnterAnimation, fadeInRightAnimation, fadeInRightOnEnterAnimation} from 'angular-animations'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations:[
    bounceAnimation(),
    fadeInDownOnEnterAnimation(),
    fadeInRightAnimation(),
    fadeInRightOnEnterAnimation()
  ]
})
export class UserComponent implements OnInit {
      booleanValue=true;

  constructor() { }

  ngOnInit() {
  }

  animation = 'rubberBand';
  animationState = false;
  animationWithState = false;
  hueBtnState = false;

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
      this.animationWithState = !this.animationWithState;
    }, 1);
  }


}
