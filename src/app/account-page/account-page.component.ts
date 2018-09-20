import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
// import HTTP service
import { HttpService } from '../services/http.service';
// import authentification service
import { AuthService } from '../services/auth.service';

// import router and CanActivate function (for redirection)
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AccountPageComponent implements OnInit {

  // define and instantiate user address to get
  userInfos: any;

  constructor(
    // add HTTP service to this component
    private httpService: HttpService
    // add authentification service to this component
    , private authService: AuthService
    // add router link to this service
    , private router: Router
  ) { }

  // at initialization of this component
  ngOnInit() {
    // get user address
    this.getUserInfos();
  }

  // get user address
  async getUserInfos() {
    // get user adersse with HTTP GET request asynchronous
    this.userInfos = await this.httpService.get('user');
  }

  // call disconnect method in authentification service
  onSignOut() {
    // execute sign out from authentification service
    this.authService.signOut();
    // redirection to connexion page
    this.router.navigate(['/connexion']);
  }
}
