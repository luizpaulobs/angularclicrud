import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GeneralService } from './service/general.service';

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class GeneralTableComponent implements OnInit {

	data: Array<any> = [];

  constructor(private generalTableService: GeneralService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
		this.generalTableService.getGeneralTable().subscribe(res => {
      this.data = res;
      this.cdr.detectChanges();
    })
  }

}
