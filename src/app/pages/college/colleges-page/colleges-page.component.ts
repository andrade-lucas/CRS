import { Component, OnInit } from '@angular/core';
import { CollegeService } from 'src/app/services/college.service';
import { Observable } from 'rxjs';
import { getCollege } from 'src/app/models/getColleges.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-colleges-page',
  templateUrl: './colleges-page.component.html',
  styleUrls: ['./colleges-page.component.css']
})
export class CollegesPageComponent implements OnInit {
  public colleges$: Observable<getCollege[]>;
  public busy = false;

  constructor(private data: CollegeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.colleges$ = this.data.get();
  }

  delete(id: String) {
    this.busy = true;
    this.data.delete(id).subscribe(
      (data: any) => {
        this.busy = false;
        if (data.status) {
          this.toastr.success(data.message, "Sucesso");
        }
        else {
          this.toastr.error(data.message, "Erro");
        }
      }
    )
  }
}
