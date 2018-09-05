import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
