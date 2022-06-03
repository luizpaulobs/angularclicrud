import { Component, OnInit, ChangeDetectionStrategy, Input, Inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

	@Input() title = "Novo";
	@Input() data = {};

  constructor(private modalRef: BsModalRef) { }

  ngOnInit(): void {
		console.log(this.data);
		
  }

	closeModal() {
		this.modalRef.hide();
	}

}
