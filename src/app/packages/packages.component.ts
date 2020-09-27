import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Package } from '../interface/interface';
import { CommonService } from '../services/common.service';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ItemsComponent } from './items/items.component';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
  constructor(public service: CommonService, public dialog: MatDialog) {}

  ngOnInit(): void {}
  onAddPackage() {
    this.service.type = 'new';
    this.service.imageUrl = '';
    this.dialog.open(AddComponent, {
      minWidth: '70vw',
    });
  }
  onEditPackage(temp: Package) {
    this.service.type = 'edit';
    this.service.package = Object.assign({}, temp);
    this.service.imageUrl = this.service.package.imageUrl;
    console.log(this.service.package);
    this.dialog.open(AddComponent, {
      minWidth: '70vw',
    });
  }
  onDeleteConfirmationDialog(id) {
    this.dialog.open(DeleteComponent, {
      width: '300px',
      data: {
        id: id,
      },
    });
  }
}
