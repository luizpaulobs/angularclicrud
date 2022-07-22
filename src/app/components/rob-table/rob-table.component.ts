import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ReplaySubject, takeUntil } from 'rxjs';
import { GeneralModel } from '../model/general.model';
import { RobService } from './service/rob.service';

@Component({
  selector: 'app-rob-table',
  templateUrl: './rob-table.component.html',
  styleUrls: ['./rob-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RobTableComponent implements OnInit, OnDestroy {

	public data: GeneralModel[] = [];

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

}
