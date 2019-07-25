import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { GetUsers } from 'src/app/models/getUsers.model';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  public users$: Observable<GetUsers[]>;

  constructor(private data: UserService) { }

  ngOnInit() {
    this.users$ = this.data.get();
  }

}
