import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  userName: string;

  constructor(private UserService: UserService) { }

  ngOnInit() {
  }

  searchUsers() {
    this.UserService.getUserName(this.userName)
  }

}
