import { Component, OnInit } from '@angular/core';
import { BlockService } from 'src/app/services/block.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CollegeService } from 'src/app/services/college.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getCollege } from 'src/app/models/getColleges.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-block-page',
  templateUrl: './create-block-page.component.html',
  styleUrls: ['./create-block-page.component.css']
})
export class CreateBlockPageComponent implements OnInit {
  public form: FormGroup;
  public colleges$: Observable<getCollege[]>;

  constructor(
    private service: BlockService, private toastr: ToastrService, private router: Router,
    private collegeService: CollegeService, private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      description: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required
      ])],
      idCollege: ['', Validators.required]
    })
   }

  ngOnInit() {
    this.colleges$ = this.collegeService.get();
  }

  submit() {
    this.service.post(this.form.value).subscribe(
      (data: any) => {
        if (data.status) {
          this.toastr.success(data.message, 'Sucesso');
          this.router.navigate(['blocks']);
        }
        else
          this.toastr.error(data.message, 'Erro');
      }
    )
  }
}
