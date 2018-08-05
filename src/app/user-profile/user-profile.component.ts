///<reference path="../../../node_modules/rxjs/operators/catchError.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {catchError, retry} from "rxjs/operators";
import {Http} from "@angular/http";

import 'rxjs/Rx'

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    private firstname: string = '';
    private contents: string = '';

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
        this.getUser().subscribe(results => this.firstname = results.firstName);
    }

    getUser(): Observable<any> {
        return this.httpClient.get("http://localhost:8080/authenticate")
    }

}
