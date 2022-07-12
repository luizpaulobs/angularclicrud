import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { GeneralModel } from '../../model/general.model';
import { LuizService } from '../service/luiz.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FormComponent implements OnInit {

	@Input() title = "Novo";
	@Input() data: GeneralModel;

  public form: FormGroup;

  constructor(private modalRef: BsModalRef, private fb: FormBuilder, private luizService: LuizService) { }

  ngOnInit(): void {
		console.log(this.data, this.title);
    if(this.data?.id) {
      this.form = this.fb.group(new GeneralModel(this.data));
    } else {
      this.form = this.fb.group(new GeneralModel());
    }
		
  }

	closeModal() {
		this.modalRef.hide();
	}

  save() {
    if(this.form.invalid) {
      return
    }

    if(this.data?.id) {
      this.luizService.editLuizTable(this.form.value)
    } else {
      this.luizService.addLuizTable(this.form.value);
    }
    this.modalRef.content.onClose.next(true);

    this.modalRef.hide();
  }

}
