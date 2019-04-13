import { Component, OnInit } from '@angular/core';
import { ProfileInfoService } from '../profileInfo.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  subjects:{subject:string,result:string}[]
  constructor(private profileinfo:ProfileInfoService) { }

  ngOnInit() {
    this.subjects = this.profileinfo.info.result
  }

}
