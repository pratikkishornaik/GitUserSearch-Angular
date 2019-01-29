import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { UserDetails } from '../userDetails';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  @select() userDetails;

  userInfo: UserDetails;


  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const id = "" + this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userDetails.subscribe((user: any) => {
      console.log(user, "inUserPage");
      let found = user.find((element) => {
        console.log(element);
        if (element.login == id) {
          return element;
        }
      })
      this.userInfo = found
    });
  }
}
