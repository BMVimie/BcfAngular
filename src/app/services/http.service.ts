// HTTP imports
import { HttpClient, HttpHeaders } from '@angular/common/http';

// to available class to Injector for creation
import { Injectable } from '@angular/core';
@Injectable()

export class HttpService {

    constructor(
        private httpClient: HttpClient
    ) { }

    // define server URL for all requests
    serverUrl: String = "http://localhost:8080/";

    //////////////
    // GET request
    async get(requestMapping: string): Promise<any> {
        // define headers to allow access
        let httpHeaders = new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*");
        // define complete resquest URL
        let requestUrl = this.serverUrl + requestMapping;
        // request HTTP
        let requestResponse = await this.httpClient
            .get<any>(requestUrl, {
                headers: httpHeaders, // use headers define above
                responseType: 'json', // define response format in JSON
                withCredentials: false
            }).toPromise()
        return requestResponse;
    }
}