import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-one-project-page',
  templateUrl: './one-project-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OneProjectPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
