import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-explanation-page',
  templateUrl: './explanation-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExplanationPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
