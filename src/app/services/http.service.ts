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

    ///////////////////////////
    // GET request asynchronous
    ///////////////////////////
    async get(requestMapping: string): Promise<any> {
        // define headers to allow access
        let httpHeaders = new HttpHeaders();
        // declare request response in await function (for asynchronous)
        let requestResponse = await this.httpClient
            // GET request HTTP with complete URL
            .get<any>(this.serverUrl + requestMapping, {
                // use headers defined above
                headers: httpHeaders,
                // define response format in JSON
                responseType: 'json',
                // enable to use credentials/certificates
                withCredentials: true
                // transform to promise to be able asynchronous
            }).toPromise();
        // return request response
        return requestResponse;
    }

    ////////////////////////////
    // POST request asynchronous
    ////////////////////////////
    async postFormUnlencoded(requestMapping: string, requestBody: any): Promise<any> {
        // define headers to define content type
        let httpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        // send POST request
        let postResult = await this.httpClient.post(this.serverUrl + requestMapping, requestBody.toString(), {
            // use headers defined above
            headers: httpHeaders,
            // define response format in JSON
            responseType: 'json',
            // enable to use credentials/certificates
            withCredentials: true
        });
        // return request response
        return postResult;
    }

    async postRawBody(requestMapping: string, requestBody: any): Promise<any> {
        // send POST request
        let postResult = await this.httpClient.post(this.serverUrl + requestMapping, requestBody, {
            // define response format in JSON
            responseType: 'json',
            // enable to use credentials/certificates
            withCredentials: true
        });
        // return request response
        return postResult;
    }

    ///////////////////////////////////////////
    // POST request asynchronous for user login
    ///////////////////////////////////////////
    async postUserLogin(userName: string, userPassword: string, _csrf: string): Promise<any> {
        // declare request body
        const requestBody = new URLSearchParams();
        // add user name to request body
        requestBody.set('username', userName);
        // add password to request body
        requestBody.set('password', userPassword);
        // add csrf to request body
        requestBody.set('_csrf', _csrf);
        // send POST asynchronous request for user login
        let postUserLoginResult = await this.postFormUnlencoded('login', requestBody);
        // return request response
        return postUserLoginResult;
    }

}
