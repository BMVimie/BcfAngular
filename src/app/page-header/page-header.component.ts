import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

// service
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageHeaderComponent implements OnInit {

  // define attribute to get authentification status ()
  authStatus: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // get authentification status when page header called
    this.authStatus = this.authService.isAuth;
  }

}
