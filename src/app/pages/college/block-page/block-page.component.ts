import { Component, OnInit } from '@angular/core';
import { GetBlocks } from 'src/app/models/getBlocks.model';
import { Observable } from 'rxjs';
import { BlockService } from 'src/app/services/block.service';

@Component({
  selector: 'app-block-page',
  templateUrl: './block-page.component.html',
  styleUrls: ['./block-page.component.css']
})
export class BlockPageComponent implements OnInit {
  public blocks$: Observable<GetBlocks[]>;

  constructor(private service: BlockService) { 
    this.blocks$ = this.service.get();
  }

  ngOnInit() {
  }

}
