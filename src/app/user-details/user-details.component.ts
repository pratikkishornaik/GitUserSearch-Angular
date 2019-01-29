import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { UserResult } from '../responseInterface';
import { UserDetails } from '../userDetails';
import { PaginationComponent } from '../pagination/pagination.component';
import { IAppState } from '../store';
import { NgRedux, select } from '@angular-redux/store';
import { ACTION_TYPES } from '../actions';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit {

  @select() userDetails;

  @Input() pagination: PaginationComponent;

  users: UserDetails[];
  repos: any;
  clickedIndex;

  constructor(private userService: UserService, private ngRedux: NgRedux<IAppState>) { }

  callUserApi() {
    this.userService.callUserSearchApi().subscribe((user: UserResult) => {
      this.ngRedux.dispatch({ type: ACTION_TYPES.ADD_USER, payload: user });
      this.userDetails.subscribe((user: any) => {
        console.log(user, "here!!");
        this.users = user;
      })
      this.pagination.pageSizeUpdated(this.users.length, Math.ceil(user.total_count / this.users.length))
    });
  }

  // callUserApi() {

  //   this.users = this.userService.callUserSearchApi();
  //   console.log(this.users, "in user Deatils");

  // }


  showRepos(username, i) {
    if (!this.users[i].showRepo) {
      this.userService.getUserRepo(username).subscribe((repo) => {
        this.users[i].repos = repo;
        this.users[i].showRepo = true;
        this.clickedIndex = i;
        console.log(repo);
      })
    }
    this.users[i].showRepo = !this.users[i].showRepo;
  }

  sortUsers(type) {

    switch (type) {

      case "SBNASC":
        {
          this.users = this.users.sort();
          break;
        }
      case "SBSASC":
        {
          this.users.sort((a, b) => {
            return a.score - b.score;
          })
          break;
        }
      case "SBSDEC":
        {
          this.users.sort((a, b) => {
            return b.score - a.score;
          })
          break;
        }
    }
  }

  ngOnInit() { }

}
