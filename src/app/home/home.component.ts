import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwiperOptions } from 'swiper/';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };
  slider = [
    'https://i.ytimg.com/vi/iYrRlnnTSjA/maxresdefault.jpg',
    'https://i.ytimg.com/vi/iYrRlnnTSjA/maxresdefault.jpg',
    'https://i.ytimg.com/vi/iYrRlnnTSjA/maxresdefault.jpg',
    'https://i.ytimg.com/vi/iYrRlnnTSjA/maxresdefault.jpg',
  ];

  packages = [
    {
      CreatedAt: '11-sep-2020',
      enName: 'package-1',
      enDesc: 'package-1 desc ',
      price: 61000,
      items: [
        'Freez',
        'LED TV 24 inch',
        'cooler 3 ft',
        'Double bed black polish 6x6 ',
        'Almirach',
        'Sofa Set (5 seats)',
        'sewing machine',
        'mattress',
        'four chairs',
        'center table',
        'Fan',
        'gas chulha',
        'mixi',
        'iron',
        'roti maker',
        'freez stand ',
        'two pillow',
        'bed sheet',
        'sitting table',
        'dinner set',
        'LED speaker',
        'chowki',
      ],
      isAvailable: true,
      imageUrl: '',
    },
    {
      CreatedAt: '11-sep-2020',
      enName: 'package-2',
      enDesc: 'package-1 desc ',
      price: 61000,
      mrp: 61000,
      discount: 0,
      items: [
        'Freez',
        'LED TV 24 inch',
        'cooler 3 ft',
        'Double bed black polish 6x6 ',
        'Almirach',
        'Sofa Set (5 seats)',
        'sewing machine',
        'four chairs',
        'center table',
        'Fan',
        'gas chulha',
        'mixi',
        'iron',
        'roti maker',
        'freez stand ',
        'two pillow',
        'bed sheet',
        'sitting table',
        'dinner set',
        'LED speaker',
      ],
      isAvailable: true,
      imageUrl: '',
    },
    {
      CreatedAt: '11-sep-2020',
      enName: 'package-3',
      enDesc: 'package-1 desc ',
      price: 61000,
      mrp: 61000,
      discount: 0,
      items: [
        'Freez',
        'LED TV 24 inch',
        'cooler 3 ft',
        'Double bed black polish 6x6 ',
        'Almirach',
        'Sofa Set (5 seats)',
        'sewing machine',
        'four chairs',
        'center table',
        'Fan',
        'gas chulha',
        'mixi',
        'iron',
        'roti maker',
        'freez stand ',
        'two pillow',
        'bed sheet',
        'sitting table',
        'dinner set',
        'LED speaker',
      ],
      isAvailable: true,
      imageUrl: '',
    },
    {
      CreatedAt: '11-sep-2020',
      enName: 'package-4',
      enDesc: 'package-1 desc ',
      price: 61000,
      mrp: 61000,
      discount: 0,
      items: [
        'Freez',
        'LED TV 24 inch',
        'cooler 3 ft',
        'Double bed black polish 6x6 ',
        'Almirach',
        'Sofa Set (5 seats)',
        'sewing machine',
        'four chairs',
        'center table',
        'Fan',
        'gas chulha',
        'mixi',
        'iron',
        'roti maker',
        'freez stand ',
        'two pillow',
        'bed sheet',
        'sitting table',
        'dinner set',
        'LED speaker',
      ],
      isAvailable: true,
      imageUrl: '',
    },
  ];
}
