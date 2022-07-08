import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GeneralTableService } from "src/app/shared/services/general-table.service";

@Injectable({
	providedIn: 'root'
})
export class GeneralService extends GeneralTableService {

	private url = "tabela";

	getGeneralTable(): Observable<any[]> {  
		return this.get(this.url);
	}

}