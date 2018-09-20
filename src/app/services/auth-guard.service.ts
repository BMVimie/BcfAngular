// import router and CanActivate function (for redirection)
import { CanActivate, Router } from '@angular/router';

// import authentification service
import { AuthService } from './auth.service';

// import to available class to Injector for creation
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    // add authentification service to this service
    private authService: AuthService
    // add router link to this service
    , private router: Router
  ) { }

  // manage if user not connected => redirection to connexion
  canActivate(): boolean {
     // if user not authentified
    if (!this.authService.isAuth) {
      // redirection to connexion page
      this.router.navigate(['/home']);
      // return not possible to activate component
      return false;
    }
    // return possible to activate component
    return true;
  }
}
