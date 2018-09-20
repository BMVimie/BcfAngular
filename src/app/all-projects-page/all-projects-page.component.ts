import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

// import our HTTP service
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-all-projects-page',
  templateUrl: './all-projects-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllProjectsPageComponent implements OnInit {

  // declare projects list
  projects: any;

  constructor(
    // add HTTP service to this component
    private httpService: HttpService
  ) { }

  ngOnInit() {
    // get all projects
    this.projects = this.httpService.get('projet');
  }

}
