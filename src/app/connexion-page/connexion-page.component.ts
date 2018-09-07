import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

// service
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConnexionPageComponent implements OnInit {

  // define attribute to get authentification status ()
  authStatus: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // get authentification status when connexion page called
    this.authStatus = this.authService.isAuth;
  }

  // authentificate
  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful !');
        this.authStatus = this.authService.isAuth;
      }
    );
  }

  // disconnect
  onSignOut() {
    this.authService.signOut();
    console.log('Sign out successful !');
    this.authStatus = this.authService.isAuth;
  }


}
