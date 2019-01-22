import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserResult } from '../responseInterface';
import { UserDetails } from '../userDetails';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userArray: any;
  users: UserDetails[];

  constructor(private userService: UserService) { }

  callUserApi() {
    this.userService.callUserSearchApi().subscribe((user: UserResult) => {
      this.users = user.items;
      console.log(this.users);
    });
  }

  ngOnInit() { }

}
