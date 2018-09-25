import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
// import to use formulary
import { NgForm } from '@angular/forms';
// import our HTTP service
import { HttpService } from '../services/http.service';
// import authentification service
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-project-page',
  templateUrl: './create-project-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateProjectPageComponent implements OnInit {

  constructor(
    // add HTTP service to this component
    private httpService: HttpService,
    // add authentification service to this component (to display page or not if user authentified)
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  // call authentificate method in authentification service
  async onSignIn(form: NgForm) {
    // get all form values
    //////////////////////
    // get project name from formulary
    let projectName: string = form.value['formProjectName'];
    // get project term date from formulary
    let projectTerm: string = form.value['formTermDate'];
    // get project funding goal from formulary
    let projectFundingGoal: string = form.value['formGoal'];

    // post all values in user tables
    /////////////////////////////////
    // declare request body
    let requestBody: any = {
      // add project name to request body
      projectName: projectName,
      // add project term date to request body
      projectTerm: projectTerm,
      // add project funding goal to request body
      projectFundingGoal: projectFundingGoal
    };

    // send POST asynchronous request for user
    /////////////////////////////////
    let postProjectResult = await this.httpService.postRawBody('project', requestBody);
    await postProjectResult.forEach((item) => {
    });
  }
}
