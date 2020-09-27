import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss'],
})
export class MsgComponent implements OnInit {
  constructor(public service: CommonService) {}

  ngOnInit(): void {}
}
