import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, ReplaySubject, Subject, takeUntil, timeout } from 'rxjs';
import { GeneralModel } from '../model/general.model';
import { FormComponent } from './form/form.component';
import { LuizService } from './service/luiz.service';

@Component({
	selector: 'app-luiz-table',
	templateUrl: './luiz-table.component.html',
	styleUrls: ['./luiz-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.Default
})
export class LuizTableComponent implements OnInit, OnDestroy {

	public data: GeneralModel[] = [];
	
	public modalRef: BsModalRef;

	private destroyed: ReplaySubject<boolean> = new ReplaySubject(1);

	constructor(private modalService: BsModalService, private luizService: LuizService, private cdr: ChangeDetectorRef) { }
	
	ngOnInit(): void {
		this.getData();
	}

	getData() {
		this.luizService.getLuizTable()
			.pipe(takeUntil(this.destroyed))
			.subscribe((res: GeneralModel[]) => {
				this.data = res;
				this.cdr.detectChanges();
		})
	}

	ngOnDestroy(): void {
		this.destroyed.next(true);
		this.destroyed.complete();
	}

	openForm() {
		this.modalRef = this.modalService.show(FormComponent, { ignoreBackdropClick: true });
		
		this.refreshData();
	}

	openEdit(row: any) {
		const initialState = {
			data: row,
			title: "Editar"
		}
		
		this.modalRef = this.modalService.show(FormComponent, { ignoreBackdropClick: true, initialState: initialState });
		
		this.refreshData();
	}

	delete(row: any) {
		this.luizService.deleteLuizTable(row.id);
		this.getData();
	}

	refreshData() {
		this.modalRef.content.onClose = new Subject<boolean>();
		this.modalRef.content.onClose.pipe(takeUntil(this.destroyed)).subscribe((result: any) => {
			if(result) {
				this.getData();
			}
		 })
	}

}
