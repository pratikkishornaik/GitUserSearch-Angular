import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { apiUrl } from './constants/apiUrl';
import { UserDetails } from './userDetails';
import { HttpClient } from "@angular/common/http";
import { UserResult } from './responseInterface';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  userName: string;
  userArray: UserResult;

  constructor(private httpClient: HttpClient) { }

  getUserName(userName) {
    this.userName = userName;
  }

  callUserSearchApi() {
    return this.httpClient.get(apiUrl.searchUserUrl + this.userName)
  }

  getUserRepo(username) {
    return this.httpClient.get(apiUrl.searchRepo + username + "/repos")
  }

}
