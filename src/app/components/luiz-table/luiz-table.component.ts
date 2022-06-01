import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormComponent } from './form/form.component';

@Component({
	selector: 'app-luiz-table',
	templateUrl: './luiz-table.component.html',
	styleUrls: ['./luiz-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LuizTableComponent implements OnInit {

	public data = [{ id: '1', name: 'Teste', origem: 'Salário', valor: 1524.42 },];

	constructor(private modalService: BsModalService) { }

	ngOnInit(): void {
	}

	openForm() {
		this.modalService.show(FormComponent)
	}

	openEdit(row: any) {
		console.log(row);
	}

	delete(row: any) {
		console.log(row);
	}

}
