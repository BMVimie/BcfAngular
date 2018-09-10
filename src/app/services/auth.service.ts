import { OnInit, Input } from '@angular/core';

// import to available class to Injector for creation
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService implements OnInit {

  // define authentification status Cookie name
  authLocalStorName: string = 'AuthStatus';

  // define authentification boolean status with authentification local storage
  @Input() isAuth: boolean = this.authStatusToBool();

  constructor(
  ) { }

  // at initialization of this service
  ngOnInit() {
  }

  // sign in and return true
  signIn() {
    // define authentification boolean status to true
    this.isAuth = true;
    // set authentification status local storage to true in string (only string in local storage)
    localStorage.setItem(this.authLocalStorName, 'true');
  }

  // sign out and return false
  signOut() {
    // define authentification boolean status to true
    this.isAuth = false;
    // set authentification status local storage to false in string (only string in local storage)
    localStorage.setItem(this.authLocalStorName, 'false');
  }

  // return authentification status local storage in boolean
  authStatusToBool(): boolean {
    // if authentification status local storage is true
    if (localStorage.getItem(this.authLocalStorName) == 'true') {
      return true;
    }
    // if authentification status local storage is false or no authentification status local storage
    else {
      return false;
    }
  }
}