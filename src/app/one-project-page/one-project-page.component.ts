import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
// import activated route to get parameters in URL
import { ActivatedRoute } from '@angular/router';
// import our HTTP service
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-one-project-page',
  templateUrl: './one-project-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OneProjectPageComponent implements OnInit {

  projectToDisplay: any;

  constructor(
    // add activated route
    private route: ActivatedRoute,
    // add HTTP service to this component
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.getProject();
  }

  async getProject() {
    let projectId = this.route.snapshot.params['id'];
    this.projectToDisplay = await this.httpService.get('project/' + projectId);
    console.log(this.projectToDisplay);
  }

}
