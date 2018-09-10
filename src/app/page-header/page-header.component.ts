import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

// import authentification service
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PageHeaderComponent implements OnInit {

  constructor(
    // add authentification service to this component (to update connexion/account icons)
    private authService: AuthService
  ) { }

  // at initialization of this component
  ngOnInit() {
  }

}
