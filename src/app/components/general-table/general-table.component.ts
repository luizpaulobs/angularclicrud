import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GeneralTableService } from 'src/app/shared/services/general-table.service';

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralTableComponent implements OnInit {

	data: Array<any> = [];

  constructor(private generalTableService: GeneralTableService) { }

  ngOnInit(): void {
		this.generalTableService.getGeneralTable().subscribe(res => this.data = res)
  }

}
