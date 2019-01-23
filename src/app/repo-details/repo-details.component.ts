import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss']
})
export class RepoDetailsComponent implements OnInit {


  @Input() userRepo: UserDetailsComponent;

  constructor() { }

  ngOnInit() {
    console.log("here", this.userRepo);
  }

}
