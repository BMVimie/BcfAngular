import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
// import authentification service
import { AuthService } from '../services/auth.service';
// import router and CanActivate function (for redirection)
import { Router } from '@angular/router';
// import Cookie service
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AccountPageComponent implements OnInit {

  // declare user infos (to be used in HTML)
  userInfos: any;

  constructor(
    // add authentification service to this component
    private authService: AuthService,
    // add router link to this service
    private router: Router,
    // add Cookie service in this component
    private cookieService: CookieService
  ) { }

  // at initialization of this component
  ngOnInit() {
    // if user not authentified (from authentification service)
    if (!this.authService.isAuth) {
      // redirection to to home page // security if user try to enter in thsi page by URL
      this.router.navigate(['/home']);
    }
    else {
      // get user informations
      this.getUserInfos();
    }

  }

  // get user informations
  getUserInfos() {
    // if user autentified
    if (this.authService.isAuth) {
      // get user infos in String from Cookie 'userInfos'
      let userInfosString = this.cookieService.get(this.authService.userInfosCookieName);
      // convert user infos in String into JSON
      this.userInfos = JSON.parse(userInfosString);
    }
  }

  // call disconnect method in authentification service
  async onSignOut() {
    // execute sign out from authentification service
    await this.authService.signOut();
    // redirection to connexion page
    this.router.navigate(['/home']);
  }
}
