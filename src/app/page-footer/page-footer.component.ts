import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
