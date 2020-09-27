import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.resetForm();
  }
  login() {
    this.authService.loading = true;
    this.authService.login(
      this.authService.admin.email,
      this.authService.admin.password
    );
  }
}
