// import HTTP functions
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import to available class to Injector for creation
import { Injectable } from '@angular/core';
@Injectable()

export class HttpService {

    // define server URL for all requests
    serverUrl: String = "http://localhost:1234/";

    constructor(
        // add HTTP client in this component
        private httpClient: HttpClient
    ) { }

    // GET request asynchronous
    async get(requestMapping: string): Promise<any> {
        // define headers to allow access
        let httpHeaders = new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*");
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
            }).toPromise()
        // return request response
        return requestResponse;
    }
}