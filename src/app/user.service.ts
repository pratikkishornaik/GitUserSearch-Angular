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
  per_page = 5;
  page_no = 0;

  constructor(private httpClient: HttpClient) { }

  getUserName(userName) {
    this.userName = userName;
  }

  updatePageAttr(pageAttr) {
    this.per_page = pageAttr.pageSize;
    this.page_no = pageAttr.pageIndex;
  }

  // callUserSearchApi(): any {
  //   this.httpClient.get(apiUrl.searchUserUrl + this.userName + "&page=" + this.page_no + "&per_page=" + this.per_page)
  //     .subscribe((user: any) => {
  //       this.ngRedux.dispatch({ type: ACTION_TYPES.ADD_USER, payload: user });
  //       console.log(user);
  //       this.userArray = user
  //       return(this.userArray);
  //     })
  // }


  callUserSearchApi() {
    return this.httpClient.get(apiUrl.searchUserUrl + this.userName + "&page=" + this.page_no + "&per_page=" + this.per_page)
  }

  getUserRepo(username) {
    return this.httpClient.get(apiUrl.searchRepo + username + "/repos")
  }

}
