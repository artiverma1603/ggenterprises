import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwiperOptions } from 'swiper/';
import { LoginComponent } from '../login/login.component';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog, public service: CommonService) {}

  ngOnInit(): void {
    this.service.resetRequest();
    this.service.request.requestType = 'Call Back';
    this.service.getImages().subscribe((data) => {
      data.find((obj, i) => {
        if (obj.id == 'slider') {
          obj.sliderImages.forEach((image) => {
            this.service.imageObject.push({
              image: image,
              thumbImage: image,
            });
          });
        }
        if (obj.id == 'service') {
          this.service.serviceImages = Object.assign({}, obj.services);
        }
      });
    });
  }
}
