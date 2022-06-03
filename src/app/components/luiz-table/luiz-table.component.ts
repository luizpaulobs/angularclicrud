import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormComponent } from './form/form.component';

@Component({
	selector: 'app-luiz-table',
	templateUrl: './luiz-table.component.html',
	styleUrls: ['./luiz-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LuizTableComponent implements OnInit {

	public data = [{ id: '1', name: 'Teste', origem: 'Salário', valor: 1524.42 },];
	
	public modalRef: BsModalRef;

	constructor(private modalService: BsModalService) { }

	ngOnInit(): void {
	}

	openForm() {
		this.modalRef = this.modalService.show(FormComponent, { ignoreBackdropClick: true });
	}

	openEdit(row: any) {
		const initialState = {
			data: row
		}
		
		this.modalRef = this.modalService.show(FormComponent, { ignoreBackdropClick: true, initialState: initialState });
	}

	delete(row: any) {
		console.log(row);
	}

}
