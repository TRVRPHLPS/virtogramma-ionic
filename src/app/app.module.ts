import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Slides } from '@ionic/angular';
import { ViewChild } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './credentials';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [AppComponent, RatingComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
	AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireAuth,
    AngularFireDatabase,
    Camera,
    ImagePicker
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
