import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

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

	getGeneralTable(): Observable<any> {  
		return new Observable(Subscriber => Subscriber.next(this.row))
	}
}