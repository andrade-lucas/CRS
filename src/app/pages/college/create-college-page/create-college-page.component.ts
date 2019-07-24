import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-college-page',
  templateUrl: './create-college-page.component.html',
  styleUrls: ['./create-college-page.component.css']
})
export class CreateCollegePageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder
    // private toastr: toaStrService
  ) { }

  ngOnInit() {
  }

}
