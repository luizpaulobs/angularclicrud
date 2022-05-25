import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralTableComponent implements OnInit {

	row = [
		{id: '1', name: 'Teste', us: 'ES', valor: 1524.42},
		{id: '1', name: 'Teste', us: 'ES', valor: 1524.42},
		{id: '1', name: 'Teste', us: 'ES', valor: 1524.42},
		{id: '1', name: 'Teste', us: 'ES', valor: 1524.42},
		{id: '1', name: 'Teste', us: 'ES', valor: 1524.42},
		{id: '1', name: 'Teste', us: 'ES', valor: 1524.42},
		{id: '1', name: 'Teste', us: 'ES', valor: 1524.42},
		{id: '1', name: 'Teste', us: 'ES', valor: 1524.42}
	]

  constructor() { }

  ngOnInit(): void {
  }

}
