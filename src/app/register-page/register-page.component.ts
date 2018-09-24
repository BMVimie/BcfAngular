import { Component, OnInit } from '@angular/core';
// import to use formulary
import { NgForm } from '@angular/forms';
// import our HTTP service
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(
    // add HTTP service to this component
    private httpService: HttpService
  ) { }

  ngOnInit() {
  }

  // call authentificate method in authentification service
  async onSignIn(form: NgForm) {
    // get all form values
    //////////////////////
    // get user login from formulary
    let userLogin: string = form.value['formLogin'];
    // get user login from formulary
    let userPassword: string = form.value['formPassword'];
    // get user email from formulary
    let userEmail: string = form.value['formEmail'];
    // get user family name from formulary
    let userFamilyName: string = form.value['formFamilyName'];
    // get user first name from formulary
    let userFirstName: string = form.value['formFirstName'];
    // get user birth date from formulary
    let userBirthDate: string = form.value['formBirthDate'];
    // get user phone number from formulary
    let userPhoneNumber: string = form.value['formPhoneNumber'];

    // post all values in user tables
    /////////////////////////////////
    // declare request body
    let requestBody: any = {
      // add user login to request body
      login: userLogin,
      // add user password to request body
      securityUserPassword: userPassword,
      // add user email to request body
      userEmail: userEmail,
      // add user family name to request body
      userFamilyName: userFamilyName,
      // add user first name to request body
      userFirstName: userFirstName,
      // add user birth date to request body
      userBirthDate: userBirthDate,
      // add user phone number to request body
      userPhoneNumber: userPhoneNumber,
      // add user enabelity to have role to request body
      securityUserEnable: 1
    };

    // send POST asynchronous request for user
    /////////////////////////////////
    let postUserResult = await this.httpService.postRawBody('user', requestBody);
    await postUserResult.forEach((item) => {
    });
  }
}
