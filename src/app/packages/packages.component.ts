import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db
      .collection('packages')
      .valueChanges()
      .subscribe((value) => (this.packages = value));
  }
  packages = [];
}
