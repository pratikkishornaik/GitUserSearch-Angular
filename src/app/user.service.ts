import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  userName: string

  constructor() { }


  getUserName(userName) {
    alert(userName);

  }


}
