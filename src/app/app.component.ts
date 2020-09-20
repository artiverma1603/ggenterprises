import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ggenterprises';
  index = 0;
  constructor(public router: Router, public dialog: MatDialog) {
    this.routeEvent(this.router);
  }
  openDialogLogin() {
    this.dialog.open(LoginComponent, {
      minWidth: '70vh',
    });
  }
  routeEvent(router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (e.urlAfterRedirects === '/home') {
          this.index = 0;
        } else if (e.urlAfterRedirects === '/packages') {
          this.index = 1;
        } else if (e.urlAfterRedirects === '/contactus') {
          this.index = 2;
        } else if (e.urlAfterRedirects === '/login') {
          this.index = 3;
        }
      }
    });
  }
}
