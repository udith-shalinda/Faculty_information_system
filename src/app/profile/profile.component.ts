import { Component, OnInit } from '@angular/core';
import { ProfileInfoService } from './profileInfo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileinfo:ProfileInfoService) { }

  ngOnInit() {
  }

}
