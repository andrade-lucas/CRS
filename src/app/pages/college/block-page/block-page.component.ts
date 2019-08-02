import { Component, OnInit } from '@angular/core';
import { GetBlocks } from 'src/app/models/getBlocks.model';
import { Observable } from 'rxjs';
import { BlockService } from 'src/app/services/block.service';
import { ConfirmDialogService } from 'src/app/services/confirmDialog.service';

@Component({
  selector: 'app-block-page',
  templateUrl: './block-page.component.html',
  styleUrls: ['./block-page.component.css']
})
export class BlockPageComponent implements OnInit {
  public blocks$: Observable<GetBlocks[]>;

  constructor(private service: BlockService, private dialog: ConfirmDialogService) { 
    this.blocks$ = this.service.get();
  }

  ngOnInit() {
  }

  delete(id: string) {
    this.dialog.confirmThis(this.service, id);
  }
}
