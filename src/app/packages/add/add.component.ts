import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatChipInputEvent } from '@angular/material/chips';
import { CommonService } from 'src/app/services/common.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import * as firebase from 'firebase';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(
    public afs: AngularFirestore,
    public service: CommonService,
    public sanitizer: DomSanitizer,
    public afStorage: AngularFireStorage,
    public snackBar: MatSnackBar
  ) {}
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.service.package.items.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(item): void {
    const index = this.service.package.items.indexOf(item);

    if (index >= 0) {
      this.service.package.items.splice(index, 1);
    }
  }

  ngOnInit(): void {
    if (this.service.type == 'new') {
      this.service.resetPackage();
      this.service.isImageChange = true;
    } else {
      this.service.isImageChange = false;
    }
  }
  changeImage() {
    this.service.package.imageUrl = '';
    this.service.imageUrl = '';
    this.service.file = null;
    this.service.isImageChange = true;
  }
  onUpload(event) {
    this.service.imageUrl = '';

    this.service.file = event.target.files[0];

    this.service.imageUrl = this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(this.service.file)
    );
  }
  onSavePackage() {
    if (this.service.isImageChange) {
      this.onUploadToFirebase();
    } else {
      this.onSavePackageToFirebase();
    }
  }
  onUploadToFirebase() {
    let date = Date.now();
    let filePath = `packages/${date}`;
    let ref = this.afStorage.ref(filePath);
    let task = ref.put(this.service.file);
    let downloadURL;
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          downloadURL = ref.getDownloadURL();
          downloadURL.subscribe((url) => {
            if (url) {
              this.service.package.imageUrl = url;
              this.onSavePackageToFirebase();
            }
          });
        })
      )
      .subscribe((url) => {});
  }

  onSavePackageToFirebase() {
    console.log(this.service.package);
    let temp: any = {
      enDesc: this.service.package.enDesc,
      enName: this.service.package.enName,
      imageUrl: this.service.package.imageUrl,
      isAvailable: this.service.package.isAvailable,
      items: this.service.package.items,
      price: this.service.package.price,
    };
    if (this.service.package.id == '') {
      (temp.createdAt = firebase.firestore.FieldValue.serverTimestamp()),
        this.afs
          .collection('packages')
          .add(temp)
          .then(() => {
            this.snackBar.open('Package Added Successfully.', 'OK', {
              duration: 500,
            });
          });
    } else {
      this.afs
        .collection('packages')
        .doc(this.service.package.id)
        .update(temp)
        .then(() => {
          this.snackBar.open('Package Updated Successfully.', 'OK', {
            duration: 500,
          });
        });
    }
  }
}
