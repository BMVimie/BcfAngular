import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-create-project-page',
  templateUrl: './create-project-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateProjectPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router)  { }

  ngOnInit() {
    this.router.navigate(['connexion']);
  }

}
