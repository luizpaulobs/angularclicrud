import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-luiz-table',
  templateUrl: './luiz-table.component.html',
  styleUrls: ['./luiz-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LuizTableComponent implements OnInit {

	public data = [];

  constructor() { }

  ngOnInit(): void {
  }

}
