import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GeneralModel } from '../../model/general.model';
import { RobService } from '../service/rob.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FormRobComponent implements OnInit {

  @Input() title = "Novo";
	@Input() data: GeneralModel;

  public form: FormGroup;

  constructor(private modalRef: BsModalRef, private fb: FormBuilder, private robService: RobService) { }

  ngOnInit(): void {
    if(this.data?.id) {
      this.form = this.fb.group(new GeneralModel(this.data));
    } else {
      this.form = this.fb.group(new GeneralModel({name: "Roberta"}));
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
      this.robService.editRobTable(this.form.value)
    } else {
      this.robService.addRobTable(this.form.value);
    }
    this.modalRef.content.onClose.next(true);

    this.modalRef.hide();
  }

}
