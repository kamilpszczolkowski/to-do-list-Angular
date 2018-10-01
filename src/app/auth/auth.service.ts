import {Injectable} from '@angular/core';
import {User} from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(public angularFire: AngularFireAuth, private router: Router) {
    angularFire.authState.subscribe(user => {
      this.user = user;
    });
  }

  logIn(email: string, password: string) {
    this.angularFire.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.router.navigate(['/todoTask']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  signUp(email: string, password: string) {
    this.angularFire.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  }

  logOut() {
    this.angularFire.auth.signOut();
  }

}
