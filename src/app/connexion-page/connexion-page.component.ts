import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

// import authentification service
import { AuthService } from '../services/auth.service';

// import router and CanActivate function (for redirection)
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ConnexionPageComponent implements OnInit {

  // define attribute to get authentification status in this component
  @Input() authStatus: boolean;

  constructor(
    // add authentification service to this component
    private authService: AuthService
    // add router link to this service
    , private router: Router
  ) { }

  // at initialization of this component
  ngOnInit() {
    // get authentification status when connexion page called
    this.authStatus = this.authService.isAuth;
  }

  // call authentificate method in authentification service
  onSignIn() {
    // execute sign in from authentification service
    this.authService.signIn();
    // update this component authentification status to true (from authentification service)
    this.authStatus = this.authService.isAuth;
    // redirection to account page
    this.router.navigate(['/account']);
  }

  // call disconnect method in authentification service
  onSignOut() {
    // execute sign out from authentification service
    this.authService.signOut();
    // update this component authentification status to false (from authentification service)
    this.authStatus = this.authService.isAuth;
  }
}
