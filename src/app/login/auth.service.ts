import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { map, switchMap } from 'rxjs/operators';
import { of as observableOf, Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  admin: Admin;
  ngZone: any;
  userData: any;
  isWrong: boolean = false;
  logOut: boolean = false;
  loading = false;
  isRefresh = true;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public afs: AngularFirestore,
    public dialog: MatDialog
  ) {
    if (this.isLogin) {
      this.uid = JSON.parse(localStorage.getItem('ggenterprises_admin_id'));
      // console.log(this.uid);
      this.getAdmin(this.uid).subscribe((data) => {
        this.adminData = data[0];
        // console.log(this.adminData);
        if (data.length == 0) {
          this.logout();
        }
      });
    }
    this.afAuth.authState.subscribe((user) => {
      if (user != null) {
        this.isAdmin.subscribe((admin) => {
          this.adminData = admin[0];
          // console.log(this.adminData);
          // console.log(user);
          if (this.adminData != null || this.adminData != undefined) {
            if (this.adminData.isAdmin == true) {
              localStorage.setItem(
                'ggenterprises_admin_id',
                JSON.stringify(user.uid)
              );
              let id: any = user.uid;
              this.uid = id;
              if (!this.isRefresh) {
                this.router.navigate(['/notifications']);
              }
            }
          } else {
            if (this.afAuth.currentUser) {
              this.afAuth.signOut();
            }
          }
        });
      } else {
        this.logout();
      }
    });
  }

  resetForm() {
    this.admin = {
      email: '',
      password: '',
    };
  }
  uid = this.afAuth.authState.pipe(
    map((authState) => {
      if (!authState) {
        return null;
      } else {
        return authState.uid;
      }
    })
  );
  isAdmin: Observable<any> = this.uid.pipe(
    switchMap((uid) => {
      if (!uid) {
        return observableOf(false);
      } else {
        return this.getAdmin(uid);
      }
    })
  );
  adminData: any = null;
  login(email, password) {
    this.isRefresh = false;
    this.logOut = false;
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.isAdmin.subscribe((admin) => {
          this.adminData = admin[0];
          // console.log(this.adminData);
          if (this.adminData != null || this.adminData != undefined) {
            if (this.adminData.isAdmin == true) {
              this.dialog.closeAll();
              this.router.navigate(['/notifications']);
            }
          } else {
            if (!this.logOut) {
              // console.log('user but not admin');
              this.afAuth.signOut();
              this.isWrong = true;
            }
          }
          this.loading = false;
          this.admin.password = '';
        });
      })
      .catch((error) => {
        // window.alert(error.message);
        this.isWrong = true;
        this.loading = false;
        this.admin.password = '';
      })
      .then(() => {
        setTimeout(() => {
          this.isWrong = false;
        }, 5000);
      });
  }
  logout() {
    this.logOut = true;
    this.afAuth.signOut();
    this.setEmpty();
    this.isWrong = false;

    this.router.navigate(['/home']);
  }
  setEmpty() {
    localStorage.setItem('ggenterprises_admin_id', null);
    this.adminData = null;
    this.uid = null;
  }
  get isLogin(): boolean {
    const user = JSON.parse(localStorage.getItem('ggenterprises_admin_id'));
    return user !== null ? true : false;
  }
  getAdmin = (uid) => {
    return this.afs
      .collection('admin', (ref) =>
        ref.where('__name__', '==', uid).where('isAdmin', '==', true)
      )
      .valueChanges();
  };
}
export class Admin {
  email: string;
  password: string;
}
