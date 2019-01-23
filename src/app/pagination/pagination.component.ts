import { Component, OnInit, Input } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserService } from '../user.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() userDetails: UserDetailsComponent;

  pageAttr = {
    pageSize: 0,
    pageLength: 0,
    pageIndex: 0
  }


  constructor(private userService: UserService) { }

  pageChanged(event) {
    console.log(event);
    this.pageAttr = {
      pageSize: event.pageSize,
      pageLength: event.length,
      pageIndex: event.pageIndex,
    }
    this.userService.updatePageAttr(this.pageAttr);
    this.userDetails.callUserApi();
  }

  pageSizeUpdated(pagesize, pagelength) {
    this.pageAttr.pageSize = pagesize;
    this.pageAttr.pageLength = pagelength;

  }

  ngOnInit() {
    console.log(this.userDetails.users);
  }

}
