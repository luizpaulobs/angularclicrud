import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GeneralTableService } from "src/app/shared/services/general-table.service";
import { GeneralModel } from "../../model/general.model";

@Injectable({
	providedIn: 'root'
})
export class LuizService extends GeneralTableService {

	private url = "luiz";

	getLuizTable(): Observable<GeneralModel[]> {  
		return this.get(this.url);
	}

	addLuizTable(obj: GeneralModel): void {
		this.post(this.url, obj)
			.subscribe(() => {
				console.log("Cadastrado com sucesso.");
			});
	}

	editLuizTable(obj: GeneralModel): void {
		this.put(`${this.url}/${obj.id}`, obj)
			.subscribe(() => {
				console.log("Editado com sucesso.");
			})
	}

	deleteLuizTable(id: number) {
		this.delete(this.url, id)
			.subscribe(() => {
				console.log("Deletado com sucesso.")
			})
	}

}