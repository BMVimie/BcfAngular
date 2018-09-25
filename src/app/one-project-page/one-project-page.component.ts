import { Component, OnInit, Inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
// import activated route to get parameters in URL
import { ActivatedRoute } from '@angular/router';
// import our HTTP service
import { HttpService } from '../services/http.service';
// import authentification service
import { AuthService } from '../services/auth.service';
// import material to use modal
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// define interface to export datas
export interface DialogData {
  raisedFunds: number;
}

/////////////////////////
// one project page component
/////////////////////////
@Component({
  selector: 'app-one-project-page',
  templateUrl: './one-project-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OneProjectPageComponent implements OnInit {

  // define project to display
  projectToDisplay: any;
  // add dialog to this component
  public dialog: MatDialog;
  // declare raised funds to display
  raisedFunds: number = 0;

  constructor(
    // add activated route
    private route: ActivatedRoute,
    // add HTTP service to this component
    private httpService: HttpService,
    // add authentification service to this component (to display contribution or not if user authentified)
    private authService: AuthService
  ) { }

  ngOnInit() {
    // get project in database
    this.getProjectInfos();
  }

  // get project in database
  async getProjectInfos() {
    // get project id in URL
    let projectId = this.route.snapshot.params['id'];
    // get project in database
    this.projectToDisplay = await this.httpService.get('project/' + projectId);
    // calculate all raised funds
    this.calculateRaisedFunds();
  }

  // calculate all raised funds
  calculateRaisedFunds() {
    // loop on project contributions
    for (let contribution of this.projectToDisplay.projectContributions) {
      // add contribution gift to raised funds
      this.raisedFunds = this.raisedFunds + contribution.contributionGift;
    }
  }
}



