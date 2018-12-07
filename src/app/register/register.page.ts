import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';

export class User {
    email: string;
    password: string;
    firstName: string;
    secondName: string;
    phone : string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  items: Observable<any[]>;

  public user:User = new User();


  constructor(public fAuth: AngularFireAuth, public db: AngularFireDatabase, private router: Router) {
    this.items = db.list('users').valueChanges();
  }

  async register() {
   try {
     var r = await this.fAuth.auth.createUserWithEmailAndPassword(
       this.user.email,
       this.user.password
     );
     if (r) {
       this.db.list('/users').push({ mail: this.user.email, password: this.user.password , first_name: this.user.firstName , second_name: this.user.secondName});
       console.log("Successfully registered!");
       this.router.navigateByUrl('/home');
     }
   } catch (err) {
     console.error(err);
   }
 }


 loginFacebook() {
     this.fAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
     .then((res) => this.db.list('/users').push({ test: JSON.parse(JSON.stringify(res))}));
     this.router.navigateByUrl('/home');
     }


  ngOnInit() {
  }

}
