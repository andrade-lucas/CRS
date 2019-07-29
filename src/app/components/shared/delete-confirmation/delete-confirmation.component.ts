import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
  @Input() public id: String;
  @Input() public description: String;

  constructor() { }

  ngOnInit() {
  }

}
