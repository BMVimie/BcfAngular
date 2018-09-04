import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-advices-page',
  templateUrl: './advices-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdvicesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
