import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GeneralModel } from '../../model/general.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

	@Input() title = "Novo";
	@Input() data = {};

  public form: FormGroup;

  constructor(private modalRef: BsModalRef, private fb: FormBuilder) { }

  ngOnInit(): void {
		console.log(this.data);
    this.form = this.fb.group(GeneralModel);
		
  }

	closeModal() {
		this.modalRef.hide();
	}

  save() {
    if(this.form.invalid) {
      return
    }
  }

}
