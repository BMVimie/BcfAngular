// import to initiate component and use input
import { OnInit, Input } from '@angular/core';
// import to available class to Injector for creation
import { Injectable } from '@angular/core';
// import Cookie service
import { CookieService } from 'ngx-cookie-service';
// import our HTTP service
import { HttpService } from '../services/http.service';

@Injectable()
export class AuthService implements OnInit {

  // define authentification status Cookie name
  @Input() userInfosCookieName = 'userInfos';

  // define authentification boolean status with authentification local storage
  @Input() isAuth: boolean = this.authStatusToBool();

  constructor(
    // add Cookie service in this component
    private cookieService: CookieService,
    // add HTTP service to this component
    private httpService: HttpService
  ) { }

  // at initialization of this service
  ngOnInit() {
  }

  //////////////////////////////////
  // sign in if HTTP request is true
  //////////////////////////////////
  async signIn(userLogin: string, userPassword: string) {

    // GET method to get token CSRF
    ///////////////////////////////
    // declare csrf (key to security)
    let _csrf: string;
    // execute GET method and get response request
    let getResp = await this.httpService.get('login');
    // define csrf in GET response request
    _csrf = getResp._csrf;

    // POST method to verify if user login OK
    /////////////////////////////////////////
    // execute POST method to get user if authentified
    let postResp = await this.httpService.postUserLogin(userLogin, userPassword, _csrf);
    // declare user informations list
    let userInfos: any[] = [];
    // put all items int POST response into user informations list
    await postResp.forEach((item) => {
      userInfos.push(item);
    });

    // verify result and save it in cookie if authentified (= not contains CSRF)
    //////////////////////////////////////////////////////
    // if user information contains CSRF = user not authentified
    if (JSON.stringify(userInfos).includes('csrf', 0)) {
      // TO CHANGE FOR INVALID RESULT IN MODAL
      console.log('login or password invalid');
    }
    // if user information doesn't contains CSRF = user authentified
    else {
      // put user informations in cookie
      await this.cookieService.set(this.userInfosCookieName, JSON.stringify(userInfos));
      // define authentification boolean status to true
      this.isAuth = true;
    }

  }

  ////////////////////////////
  // sign out and return false
  ////////////////////////////
  async signOut() {
    // define authentification boolean status to false
    this.isAuth = false;
    // delet user informations cookie
    this.cookieService.delete(this.userInfosCookieName);
    // logout with Spring
    await this.httpService.get('logout');
  }

  //////////////////////////////////////////////////////////////////////
  // return authentification status when user informations cookie exists
  //////////////////////////////////////////////////////////////////////
  authStatusToBool(): boolean {
    // if user informations cookie exists
    if (this.cookieService.check(this.userInfosCookieName)) {
      // return true for user authentified
      return true;
    }
    // if user informations cookie doesn't exists
    else {
      // return false  for user not authentified
      return false;
    }
  }
}
