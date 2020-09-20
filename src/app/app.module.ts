import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from 'src/environments/firabase';

import { from } from 'rxjs';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './packages/add/add.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    ContactusComponent,
    LoginComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgxUsefulSwiperModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
