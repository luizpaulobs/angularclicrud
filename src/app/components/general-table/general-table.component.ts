import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { forkJoin, ReplaySubject, takeUntil } from 'rxjs';
import { LuizService } from '../luiz-table/service/luiz.service';
import { GeneralModel } from '../model/general.model';
import { RobService } from '../rob-table/service/rob.service';
import { GeneralService } from './service/general.service';

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class GeneralTableComponent implements OnInit, OnDestroy {

	data: GeneralModel[] = [];

  private destroy: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private generalTableService: GeneralService, private cdr: ChangeDetectorRef, private luizService: LuizService, private robService: RobService) { }

  ngOnInit(): void {
		// this.generalTableService.getGeneralTable().subscribe(res => {
    //   this.data = res;
    //   this.cdr.detectChanges();
    // })

    forkJoin({dados1: this.luizService.getLuizTable(), dados2: this.robService.getRobTable()})
    .pipe(takeUntil(this.destroy))
    .subscribe(result => {
      let dados: GeneralModel[] = [];

      dados.push( ...result.dados1, ...result.dados2 );
      dados.forEach((e, i) => e.id = i);
      this.data = dados;
      this.cdr.detectChanges();
      console.log(this.data);
      
    })
  }

  ngOnDestroy(): void {
		this.destroy.next(true);
		this.destroy.complete();
	}

  soma(value: any) {
		return `<strong>Total: R$ ${value.reduce((accumulator: number, curr: number) => accumulator + curr)}<strong>`;
	}

	nada(value: any) {
		return null
	}

}
