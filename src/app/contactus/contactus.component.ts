import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  constructor(public service: CommonService) {}

  ngOnInit(): void {
    this.service.resetRequest();
    this.service.request.requestType = 'Contact Us';
  }
}
