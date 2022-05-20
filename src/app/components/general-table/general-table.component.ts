import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
