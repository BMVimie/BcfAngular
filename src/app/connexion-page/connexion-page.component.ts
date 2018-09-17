import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

// import authentification service
import { AuthService } from '../services/auth.service';

// import router and CanActivate function (for redirection)
import { Router } from '@angular/router';

// import to use formulary
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ConnexionPageComponent implements OnInit {

  constructor(
    // add authentification service to this component
    private authService: AuthService
    // add router link to this service
    , private router: Router
  ) { }

  // at initialization of this component
  ngOnInit() {
    // if user authentified (from authentification service)
    if (this.authService.isAuth){
      // redirection to to account page
      this.router.navigate(['/account']);
    }
  }

  // call authentificate method in authentification service
  onSignIn(form: NgForm) {
    // get user login from formulary
    let userLogin : string = form.value['formLogin1'];
    // get user login from formulary
    let userPassword : string = form.value['formPassword1'];
    // execute sign in from authentification service
    this.authService.signIn(userLogin, userPassword);
    // // redirection to account page
    // this.router.navigate(['/account']);
  }
}
