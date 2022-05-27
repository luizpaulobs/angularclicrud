import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export class GeneralTableService {

	public row = [
		{id: '1', name: 'Teste', origem: 'Salário', valor: 1524.42},
		{id: '1', name: 'Teste', origem: 'Salário', valor: 1524.42},
		{id: '1', name: 'Teste', origem: 'Salário', valor: 1524.42},
		{id: '1', name: 'Teste', origem: 'Salário', valor: 1524.42},
		{id: '1', name: 'Teste', origem: 'Salário', valor: 1524.42},
		{id: '1', name: 'Teste', origem: 'Salário', valor: 1524.42},
		{id: '1', name: 'Teste', origem: 'Salário', valor: 1524.42},
		{id: '1', name: 'Teste', origem: 'Salário', valor: 1524.42}
	]

	constructor() {}

	getGeneralTable(): Array<any> { 
		return this.row
	}
}