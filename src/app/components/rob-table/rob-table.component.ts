import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReplaySubject, Subject, take, takeUntil } from 'rxjs';
import { ConfirmDeleteComponent } from 'src/app/shared/components/confirm-delete/confirm-delete.component';
import { GeneralModel } from '../model/general.model';
import { FormRobComponent } from './form/form.component';
import { RobService } from './service/rob.service';

@Component({
  selector: 'app-rob-table',
  templateUrl: './rob-table.component.html',
  styleUrls: ['./rob-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RobTableComponent implements OnInit, OnDestroy {

	public data: GeneralModel[] = [];

	public modalRef: BsModalRef;

	private destroy: ReplaySubject<boolean> = new ReplaySubject(1);


  constructor(private modalService: BsModalService, private robService: RobService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
		this.destroy.next(true);
		this.destroy.complete();
	}

  getData() {
		this.robService.getRobTable()
			.pipe(takeUntil(this.destroy))
			.subscribe((res: GeneralModel[]) => {
				this.data = res;
				console.log('Foi');
				
				this.cdr.detectChanges();
		})
	}

  openForm() {
		this.modalRef = this.modalService.show(FormRobComponent, { ignoreBackdropClick: true });

		this.refreshData();
	}

  openEdit(row: any) {
		const initialState = {
			data: row,
			title: "Editar"
		}
		
		this.modalRef = this.modalService.show(FormRobComponent, { ignoreBackdropClick: true, initialState: initialState });
		
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
				this.robService.deleteRobTable(row.id);
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
