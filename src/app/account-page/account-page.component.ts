import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

//services
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountPageComponent implements OnInit {

  // define and instantiate user address to get
  userAddress: any;

  constructor(private httpService: HttpService) { }

  // actions when this component initialize
  ngOnInit() {
    this.getAddress();
  }

  // get user address with HTTP GET request
  async getAddress() {
    this.userAddress = await this.httpService.get("address");
    console.log(this.userAddress);
  }

}
