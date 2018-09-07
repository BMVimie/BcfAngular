import { CanActivate, Router} from '@angular/router';

//services
import { AuthService } from './auth.service';

// to available class to Injector for creation
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService
    ,private router: Router
  ) { }

  // manage if user not connected => redirection to connexion
  canActivate(): boolean { // return boolean
    if (!this.authService.isAuth) { // if user not authentified
      this.router.navigate(['/connexion']); // redirection to connexion page
      return false;
    }
    return true;
  }
}