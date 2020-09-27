import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { Image, Package, Request } from '../interface/interface';
import { AuthService } from '../login/auth.service';
import { ItemsComponent } from '../packages/items/items.component';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(
    public afs: AngularFirestore,
    public auth: AuthService,
    public snackBar: MatSnackBar,
    public sheet: MatBottomSheet
  ) {}
  type;
  isImageChange = false;
  packages: Package[];
  package: Package;
  imageObject: Array<object> = [];
  serviceImages: {
    gym: string;
    pg: string;
    tour: string;
  } = {
    gym: '',
    pg: '',
    tour: '',
  };
  imageUrl: any = '';
  file: File;
  request: Request;
  requests: Request[];
  msg = '';
  items: Array<string> = [];
  recomPackages: Package[] = [];

  resetPackage() {
    this.package = {
      createdAt: '',
      enDesc: '',
      enName: '',
      id: '',
      imageUrl: '',
      isAvailable: true,
      items: [],
      price: null,
    };
    this.imageUrl = '';
    this.file = null;
  }
  resetRequest() {
    this.request = {
      createdAt: '',
      email: '',
      firstName: '',
      id: '',
      lastName: '',
      msg: '',
      phoneNo: null,
      requestType: '',
    };
  }
  getPackages() {
    return this.afs
      .collection('packages')
      .snapshotChanges()
      .pipe(
        map((snapshot) =>
          snapshot.map((a) => {
            const id = a.payload.doc.id;
            const data = a.payload.doc.data();
            return { id, ...(data as Object) } as Package;
          })
        )
      );
  }
  wait = false;
  onChange(avail, id) {
    this.wait = true;
    let newAvail = !avail;

    setTimeout(() => {
      this.afs
        .collection('packages')
        .doc(id)
        .update({
          isAvailable: newAvail,
        })
        .then(() => {
          this.wait = false;
        });
    }, 500);
  }
  onDelete(id) {
    this.afs
      .collection('packages')
      .doc(id)
      .delete()
      .then(() => {
        this.snackBar.open('Deleted Successfully.', 'OK', {
          duration: 500,
        });
      });
  }
  getImages() {
    return this.afs
      .collection('images')
      .snapshotChanges()
      .pipe(
        map((snapshot) =>
          snapshot.map((a) => {
            const id = a.payload.doc.id;
            const data = a.payload.doc.data();
            return { id, ...(data as Object) } as any;
          })
        )
      );
  }

  saveRequest() {
    let request = this.request;
    this.resetRequest();
    this.afs
      .collection('request')
      .add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        email: request.email,
        firstName: request.firstName,
        lastName: request.lastName,
        msg: request.msg,
        phoneNo: Number(request.phoneNo),
        requestType: request.requestType,
      })
      .then(() => {
        this.snackBar.open('Request Sent Successfully.', 'OK', {
          duration: 500,
        });
      });
  }
  getRequests() {
    return this.afs
      .collection('request', (ref) => ref.orderBy('createdAt', 'desc'))
      .snapshotChanges()
      .pipe(
        map((snapshot) =>
          snapshot.map((a) => {
            const id = a.payload.doc.id;
            const data = a.payload.doc.data();
            return { id, ...(data as Object) } as Request;
          })
        )
      );
  }
  packageTemp: Package;
  onBottomSheet(temp: Package) {
    this.packageTemp = Object.assign({}, temp);

    this.sheet.open(ItemsComponent);
  }
}
