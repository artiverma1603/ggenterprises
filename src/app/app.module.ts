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
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './packages/add/add.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NotificationsComponent } from './notifications/notifications.component';
import { MsgComponent } from './notifications/msg/msg.component';
import { DeleteComponent } from './packages/delete/delete.component';
import { ItemsComponent } from './packages/items/items.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    ContactusComponent,
    LoginComponent,
    AddComponent,
    NotificationsComponent,
    MsgComponent,
    DeleteComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
