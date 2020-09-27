import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../services/common.service';
import { MsgComponent } from './msg/msg.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  constructor(public service: CommonService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.getRequests().subscribe((data) => {
      this.service.requests = data;
    });
  }
  onOpenMsg(msg) {
    this.service.msg = msg;
    this.dialog.open(MsgComponent);
  }
  timestampConversion = (timestamp) => {
    let date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString();
  };
}
