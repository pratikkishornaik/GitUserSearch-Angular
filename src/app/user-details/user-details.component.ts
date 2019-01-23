import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { UserResult } from '../responseInterface';
import { UserDetails } from '../userDetails';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() pagination: PaginationComponent;

  users: UserDetails[];
  repos: any;
  clickedIndex;

  constructor(private userService: UserService) { }

  callUserApi() {
    this.userService.callUserSearchApi().subscribe((user: UserResult) => {
      this.users = user.items;
      console.log(this.users, user);
      this.pagination.pageSizeUpdated(this.users.length, Math.ceil(user.total_count / this.users.length))
    });
  }


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

      case "SBN":
        {
          this.users = this.users.sort();
          break;
        }

      case "SBS":
        {
          this.users = this.users.sort((a, b) => {
            return b.score - a.score;
          })
          break;
        }
    }
  }

  ngOnInit() { }

}
