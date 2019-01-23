import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { UserDetails } from '../userDetails';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserResult } from '../responseInterface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  userName: string;
  users: UserDetails[];
  sort = [{
    type: "SBN",
    value: "Sort By Name"
  },
  {
    type: "SBS",
    value: "Sort By Score"
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
