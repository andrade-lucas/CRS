import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { GetUsers } from 'src/app/models/getUsers.model';
import { ConfirmDialogService } from 'src/app/services/confirmDialog.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  public users$: Observable<GetUsers[]>;

  constructor(private service: UserService, private dialog: ConfirmDialogService) { 
    this.users$ = this.service.get();
  }

  ngOnInit() {
  }

  delete(id: string) {
    this.dialog.confirmThis(this.service, id);
  }
}
