import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class GeneralTableService {

	public row = [
		{id: '148', name: 'Análise e Desenvolvimento de Sistemas', tipo: 'Tecnólogo', valor: 200.42},
		{id: '126', name: 'Administração', tipo: 'Bacharelado', valor: 560.42},
		{id: '178', name: 'Ciências Contábeis', tipo: 'Bacharelado', valor: 550.42},
		{id: '136', name: 'Educação Física', tipo: 'Licenciatura', valor: 350.42},
		{id: '165', name: 'Engenharia da Computação', tipo: 'Bacharelado', valor: 1524.42},
		{id: '191', name: 'Gestão Comercial', tipo: 'Tecnólogo', valor: 380.42},
		{id: '146', name: 'Gestão de RH', tipo: 'Tecnólogo', valor: 240.42},
		{id: '137', name: 'História', tipo: 'Licenciatura', valor: 290.42}
	]

	constructor() {}

	getGeneralTable(): Observable<any> {  
		return new Observable(Subscriber => Subscriber.next(this.row))
	}
}