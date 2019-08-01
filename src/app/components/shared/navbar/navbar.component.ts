import { Component, OnInit } from '@angular/core';
import { Security } from 'src/app/utils/security.util';
import { UserAuth } from 'src/app/models/userAuth.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user: UserAuth;

  constructor(private router: Router, private toastr: ToastrService) { 
  }

  ngOnInit() {
    this.user = Security.getUser();
  }

  logout() {
    Security.clear();
    this.toastr.info('Volte sempre', 'Sessão Encerrada');
    this.router.navigate(['login']);
  }
}
