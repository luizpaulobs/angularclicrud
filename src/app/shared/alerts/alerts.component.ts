import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertsComponent implements OnInit {

	@Input() type = "warning";
	@Input() message = "Ops, algo deu errado!";
	@Input() title = 'Informação'

  constructor() { }

  ngOnInit(): void {
  }

}
