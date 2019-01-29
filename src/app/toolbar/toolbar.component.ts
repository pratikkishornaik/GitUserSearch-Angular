import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { UserDetails } from '../userDetails';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserResult } from '../responseInterface';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


  userName: string;

  users: UserDetails[];

  sort = [{
    type: "SBNASC",
    value: "Sort By Name A-Z"
  },
  {
    type: "SBSASC",
    value: "Sort By Score Ascending"
  },
  {
    type: "SBSDEC",
    value: "Sort By Score Descending"
  }
  ]

  @Input() userDetails: UserDetailsComponent;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  sortData(event) {
    this.userDetails.sortUsers(event.value);
  }

  searchUsers() {
    this.userService.getUserName(this.userName);
    this.userDetails.callUserApi();
  }

}
