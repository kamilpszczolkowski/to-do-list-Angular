import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService) {
  }

  logIn(formData: NgForm) {
    this.authService.logIn(formData.value.email, formData.value.password);
  }

  signUp(formData: NgForm) {
    this.authService.signUp(formData.value.email, formData.value.password);
  }
}
