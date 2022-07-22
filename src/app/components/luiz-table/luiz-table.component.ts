import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReplaySubject, Subject, take, takeUntil } from 'rxjs';
import { ConfirmDeleteComponent } from 'src/app/shared/components/confirm-delete/confirm-delete.component';
import { GeneralModel } from '../model/general.model';
import { FormLuizComponent } from './form/form.component';
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

	private destroy: ReplaySubject<boolean> = new ReplaySubject(1);

	constructor(private modalService: BsModalService, private luizService: LuizService, private cdr: ChangeDetectorRef) { }
	
	ngOnInit(): void {
		this.getData();
	}
	
	ngOnDestroy(): void {
		this.destroy.next(true);
		this.destroy.complete();
	}

	getData() {
		this.luizService.getLuizTable()
			.pipe(takeUntil(this.destroy))
			.subscribe((res: GeneralModel[]) => {
				this.data = res;
				console.log('Foi');
				
				this.cdr.detectChanges();
		})
	}

	openForm() {
		this.modalRef = this.modalService.show(FormLuizComponent, { ignoreBackdropClick: true });

		this.refreshData();
	}

	openEdit(row: any) {
		const initialState = {
			data: row,
			title: "Editar"
		}
		
		this.modalRef = this.modalService.show(FormLuizComponent, { ignoreBackdropClick: true, initialState: initialState });
		
		this.refreshData();
	}

	delete(row: any) {
		const initialState = {
			id: row.id
		}

		this.modalRef = this.modalService.show(ConfirmDeleteComponent, {ignoreBackdropClick: true, initialState: initialState});
		
		this.modalRef.content.onClose = new Subject<boolean>();
		this.modalRef.content.onClose.pipe(take(1)).subscribe((result: any) => {	
			if(result) {
				this.luizService.deleteLuizTable(row.id);
				setTimeout(() => {
					this.getData();
				}, 500);
			}
		 })
	}

	refreshData() {
		this.modalRef.content.onClose = new Subject<boolean>();
		this.modalRef.content.onClose.pipe(take(1)).subscribe((result: any) => {	
			if(result) {
				setTimeout(() => {
					this.getData();
				}, 500);
			}
		 })
	}

	soma(value: any) {
		return `<strong>Total: R$ ${value.reduce((accumulator: number, curr: number) => accumulator + curr)}<strong>`;
	}

	nada(value: any) {
		return null
	}

}
