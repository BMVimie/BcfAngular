// import HTTP functions
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import to available class to Injector for creation
import { Injectable } from '@angular/core';
@Injectable()

export class HttpService {

    // define server URL for all requests
    serverUrl: String = 'http://localhost:1234/';

    constructor(
        // add HTTP client in this component
        private httpClient: HttpClient
    ) { }

    // GET request asynchronous
    async get(requestMapping: string): Promise<any> {
        // define headers to allow access
        let httpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
        // declare request response in await function (for asynchronous)
        let requestResponse = await this.httpClient
            // GET request HTTP with complete URL
            .get<any>(this.serverUrl + requestMapping, {
                // use headers defined above
                headers: httpHeaders,
                // define response format in JSON
                responseType: 'json',
                // enable to use credentials/certificates
                withCredentials: false
                // transform to promise to be able asynchronous
            }).toPromise();
        // return request response
        return requestResponse;
    }

    // POST request asynchronous
    async post(requestMapping: string, requestBody: any): Promise<any> {
        // define headers to define content type
        let httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        // send POST request
        await this.httpClient.post(this.serverUrl + requestMapping, requestBody, {
                // use headers defined above
                headers: httpHeaders,
                // define response format in JSON
                responseType: 'json',
                // enable to use credentials/certificates
                withCredentials: true
                // transform to promise to be able asynchronous
            }).subscribe(
                // if success
                data => {
                    console.log('POST Request is successful', data);
                },
                // if failed
                error => {
                    console.log('POST request error', error);
                }
            );
    }

    // POST request asynchronous for user
    async postUserLogin(userName: string, userPassword: string): Promise<any> {
        // define user login request parameters
        let requestBody: any = {
            username: userName
            , userpassword: userPassword
        };
        // send POST asynchronous request for user login
        await this.post('login', requestBody);
    }

    // POST request asynchronous for address
    async postAddress(addressCountry: string, addressCity: string): Promise<any> {
        // define address request parameters
        let requestBody: any = {
            addressCountry: addressCountry
            , addressCity: addressCity
        };
        // send POST asynchronous request for address
        await this.post('address', requestBody);
    }
}
