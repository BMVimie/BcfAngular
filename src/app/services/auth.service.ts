import { OnInit, Input } from '@angular/core';

// import to available class to Injector for creation
import { Injectable } from '@angular/core';
// import Cookie service
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService implements OnInit {

  // define authentification status Cookie name
  authCookieName: string = 'AuthStatus';

  // define authentification boolean status with authentification local storage
  @Input() isAuth: boolean = this.authStatusToBool();

  constructor(
    // add Cookie service in this component
    private cookieService: CookieService
  ) { }

  // at initialization of this service
  ngOnInit() {
  }

  // sign in and return true
  signIn() {
    // define authentification boolean status to true
    this.isAuth = true;
    // set authentification status Cookie to true
    this.cookieService.set(this.authCookieName, 'true');
  }

  // sign out and return false
  signOut() {
    // define authentification boolean status to false
    this.isAuth = false;
    // set authentification status Cookie to false
    this.cookieService.set(this.authCookieName, 'false');
  }

  // return authentification status local storage in boolean
  authStatusToBool(): boolean {
    // if authentification status Cookie is true
    if (this.cookieService.get(this.authCookieName) == 'true') {
      return true;
    }
    // if authentification status Cookie is false or no authentification status Cookie
    else {
      return false;
    }
  }
}