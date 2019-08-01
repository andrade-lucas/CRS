import { Component, OnInit } from '@angular/core';
import { Security } from 'src/app/utils/security.util';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {
  public id: String;
  public user: Observable<User>;

  constructor(private service: UserService) { 
    this.id = Security.getUser().id;
    this.user = this.service.getById(this.id);
  }

  ngOnInit() {
  }

}
