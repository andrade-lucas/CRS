import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  public users$: Observable<any[]>;

  constructor(private data: Data) { }

  ngOnInit() {
    this.users$ = this.data.getUsers();
  }

}
