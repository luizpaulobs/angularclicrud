import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-rob-table',
  templateUrl: './rob-table.component.html',
  styleUrls: ['./rob-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RobTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
