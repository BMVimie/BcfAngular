import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-all-projects-page',
  templateUrl: './all-projects-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllProjectsPageComponent implements OnInit {

  name:String;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.name = this.route.snapshot.params['id'];
  }

}
