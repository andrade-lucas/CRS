import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getCollege } from 'src/app/models/getColleges.model';
import { BlockService } from 'src/app/services/block.service';
import { CollegeService } from 'src/app/services/college.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Block } from 'src/app/models/block.model';

@Component({
  selector: 'app-edit-block-page',
  templateUrl: './edit-block-page.component.html',
  styleUrls: ['./edit-block-page.component.css']
})
export class EditBlockPageComponent implements OnInit {
  public form: FormGroup;
  public colleges$: Observable<getCollege[]>;
  public busy = false;
  public id: String;

  constructor(
    private service: BlockService, private collegeService: CollegeService, private toastr: ToastrService,
    private router: Router, private fb: FormBuilder, private activatedRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      description: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required
      ])],
      idCollege: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.busy = true;
    this.colleges$ = this.collegeService.get();
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.service.getById(this.id).subscribe(
      (data: Block) => {
        this.form.controls['id'].setValue(data.id);
        this.form.controls['description'].setValue(data.description);
        this.form.controls['idCollege'].setValue(data.idCollege);
      }
    )
    this.busy = false;
  }

  submit() {
    this.service.put(this.form.value).subscribe(
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
