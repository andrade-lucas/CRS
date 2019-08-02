import { Component, OnInit, Inject } from '@angular/core';
import { ConfirmDialogService } from 'src/app/services/confirmDialog.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
  public message: any;

  constructor(private service: ConfirmDialogService) { }

  ngOnInit() {
  }

  confirm() {
    this.service.confirm();
  }
}
