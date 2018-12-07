import { Component, Input, EventEmitter ,Output ,OnInit} from "@angular/core";
import { AlertController, Slides } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

export class Review{
  review: string;
  kitchen: string;
  atmosfere: string;
  service: string;
  cost: string;
  location: string;
  parking: string;

}

export class Zakaz {
    name: string;
    phone: string;
    table: string;
    myDate: string;
    time: string;
    guests: string;
}


@Component({
  selector: 'app-avocado',
  templateUrl: './avocado.page.html',
  styleUrls: ['./avocado.page.scss'],
})

export class AvocadoPage implements OnInit {

   @Input() kitchen: number = 0;
   @Input() atmosfere: number = 0;
   @Input() service: number = 0;
   @Input() cost: number = 0;
   @Input() location: number = 0;
   @Input() parking: number = 0;

   @Input() rateID: number ;

   @Output() kitchenChange: EventEmitter<number> = new EventEmitter();;
   @Output() atmosfereChange: EventEmitter<number> = new EventEmitter();;
   @Output() serviceChange: EventEmitter<number> = new EventEmitter();;
   @Output() costChange: EventEmitter<number> = new EventEmitter();;
   @Output() locationChange: EventEmitter<number> = new EventEmitter();;
   @Output() parkingChange: EventEmitter<number> = new EventEmitter();;

   kitch: number = 1;
   atmos: number = 2;
   serv: number = 3;
   price: number = 4;
   loc: number = 5;
   park: number = 6;



   @ViewChild(Slides) slides: Slides;

   items: Observable<any[]>;

   public zakaz:Zakaz = new Zakaz();
   public review:Review = new Review();

   public imageLists: any[] = [];

   hideMe: boolean;
   presentDiv: boolean;
   reviewTrigger: boolean = false;
   reviewIog: boolean;
   rivewNotUnlog: boolean;

   myDate: string = new Date().toISOString()

  constructor(public alertController: AlertController,public fAuth: AngularFireAuth, public db: AngularFireDatabase,private camera: Camera, private imagePicker: ImagePicker) {
    this.items = db.list('orders').valueChanges();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Отлично!',
      subHeader: 'Ваш резерв оформлен.',
      message: this.zakaz.name + ', в скорем времени с Вами свяжется администратор заведения! ',
      buttons: ['OK']
    });
    await alert.present();
  }




  nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    this.zakaz.myDate = (this.myDate).substring(5, 7) + " месяц" + (this.myDate).substring(7, 10) + " день";
    if(this.zakaz.name && this.zakaz.phone && this.zakaz.table && this.zakaz.myDate && this.zakaz.guests && this.zakaz.time){
        this.db.list('/orders').push({name: this.zakaz.name, phone: this.zakaz.phone , table: this.zakaz.table , data: this.zakaz.myDate, guests: this.zakaz.guests, time: this.zakaz.time});
        console.log("ЖИ ЕСТЬ");
        this.presentAlert();
        if (this.hideMe){
          this.hideMe = false;
          this.presentDiv = true;
        }
        else{
        this.hideMe = true;
        this.presentDiv = false;
      }

      }

    console.log(this.zakaz.myDate,this.zakaz.time);
}




  pervSlide(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
}

  rate(index:number, rateID:number) {
    switch (rateID){
      case 1:
        this.kitchen = index;
        this.kitchenChange.emit(this.kitchen);
        return console.log('Кухня ' + index);
      case 2:
        this.atmosfere = index;
        this.atmosfereChange.emit(this.atmosfere);
        return console.log('Атмосфера ' + index );
      case 3:
         this.service = index;
         this.serviceChange.emit(this.service);
         return console.log('Обслуживаение '+ index);
      case 4:
         this.cost = index;
         this.costChange.emit(this.cost);
         return console.log('Стоимость ' + index);
      case 5:
        this.location = index;
        this.locationChange.emit(this.location);
        return console.log('Расположение ' + index);
      case 6:
        this.parking = index;
        this.parkingChange.emit(this.cost);
        return console.log('Парковка ' + index);
      default:
        return console.log('Rating Here Boys');
     }
   }

 getColor(index:number,rateID:number) {
        if (this.isAboveRating(index, rateID)){
         return "grey";
        }
        switch (index) {
          case 1 :
          case 2 :
            return "gold";
          case 3:
          case 4:
            return "gold";
          case 5:
            return "gold";
          default:
            return "grey";
  }
}
  isAboveRating(index: number, rateID:number ): boolean {
    switch (rateID){
      case 1:
        return index > this.kitchen;
      case 2:
        return index > this.atmosfere;
      case 3:
        return index > this.service;
      case 4:
        return index > this.cost;
      case 5:
        return index > this.location;
      case 6:
        return index > this.parking;
  }
}

 sendReview(){
   console.log(this.parking);
   const options: CameraOptions = {
   quality: 100,
   destinationType: this.camera.DestinationType.FILE_URI,
   encodingType: this.camera.EncodingType.JPEG,
   mediaType: this.camera.MediaType.PICTURE
 }

this.imagePicker.getPictures(options).then((results) => {
  for (var i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
      this.db.list('/review').push({img: results[i]});
  }
}, (err) => { });
 }

  ngOnInit() {
  this.presentDiv = false;
  this.hideMe = true;
  this.slides.lockSwipes(true);
  if(this.fAuth.authState.pipe(first()).toPromise()){
    this.reviewIog = true;
    this.rivewNotUnlog = false;
    console.log(this.fAuth.authState.pipe(first()).toPromise());
    }
  else{
    this.reviewIog = false;
    this.rivewNotUnlog = true;
  }
  }

}
