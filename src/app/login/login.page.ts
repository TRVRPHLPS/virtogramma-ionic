import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

export class User {
    email: string;
    password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

public user:User = new User();

  constructor(public fAuth: AngularFireAuth, private router: Router) { }

  async login() {
   try {
     var r = await this.fAuth.auth.signInWithEmailAndPassword(
       this.user.email,
       this.user.password
     );
     if (r) {
       console.log("Successfully logged in!");
     }

   } catch (err) {
     console.error(err);
   }
 }

 registration(){
   this.router.navigateByUrl('/register');
 }


  ngOnInit() {
  }

}
