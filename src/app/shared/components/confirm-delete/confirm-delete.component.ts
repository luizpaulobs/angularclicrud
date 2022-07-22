import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDeleteComponent implements OnInit {

  @Input() id: string;

  constructor(private modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  cancel() {
    this.modalRef.hide();
  }

  confirm() {
    this.modalRef.content.onClose.next(true);

    this.modalRef.hide();
  }

}
