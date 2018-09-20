import { Component, OnInit, Inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// import authentification service
import { AuthService } from '../services/auth.service';

export interface DialogData {
  login: string;
  password: string;
}


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageHeaderComponent implements OnInit {

  login: string;
  password: string;

  constructor(
    // add authentification service to this component (to update connexion/account icons)
    private authService: AuthService,
    // add dialog to this component
    public dialog: MatDialog
  ) { }

  // at initialization of this component
  ngOnInit() {
  }

  openConnection(): void {
    const dialogLogin = this.dialog.open(LoginComponent, {
      width: '250px',
    });

    dialogLogin.afterClosed().subscribe(result => {
      console.log("Login : "+result);
    });
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
})
export class LoginComponent {
  constructor(public dialogLogin: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, // add dialog to this component
  public dialog: MatDialog) {}
  onNoClick(): void {
    this.dialogLogin.close();
  }
  onClick(){
    const dialogPassword = this.dialog.open(PasswordComponent, {
      width: '250px',
    });

    dialogPassword.afterClosed().subscribe(result => {
      console.log("Password : "+result);
    });
  }
}

@Component({
  selector: 'app-password',
  templateUrl: './password.html',
})
export class PasswordComponent {
  constructor(public dialogPassword: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogPassword.close();
  }
}