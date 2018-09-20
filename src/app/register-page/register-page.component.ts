import { Component, OnInit } from '@angular/core';

// import to use formulary
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // call authentificate method in authentification service
  onSignIn(form: NgForm) {
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
  }
}
