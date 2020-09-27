import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ggenterprises';
  index = 0;
  constructor(
    public router: Router,
    public dialog: MatDialog,
    public auth: AuthService,
    public service: CommonService
  ) {
    this.routeEvent(this.router);
    this.service.getPackages().subscribe((data) => {
      this.service.packages = data;
      this.service.recomPackages = [];
      for (let i = 0; i < 4; i++) {
        if (this.service.packages[i]) {
          this.service.recomPackages.push(this.service.packages[i]);
        }
      }
    });
  }
  openDialogLogin() {
    this.dialog.open(LoginComponent, {
      width: '400px',
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
        } else if (e.urlAfterRedirects === '/notifications') {
          this.index = 3;
        }
      }
    });
  }
}
