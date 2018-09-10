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
  userAddress: any;

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
    this.getAddress();
  }

  // get user address
  async getAddress() {
    // get user adersse with HTTP GET request asynchronous
    this.userAddress = await this.httpService.get("address");
  }

  // call disconnect method
  onSignOut() {
    // execute sign out from authentification service
    this.authService.signOut();
    // redirection to connexion page
    this.router.navigate(['/connexion']);
  }
}
