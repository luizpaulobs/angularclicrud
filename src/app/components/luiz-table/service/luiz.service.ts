import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GeneralTableService } from "src/app/shared/services/general-table.service";

@Injectable({
	providedIn: 'root'
})
export class LuizService extends GeneralTableService {

	private url = "luiz";

	getLuizTable(): Observable<any[]> {  
		return this.get(this.url);
	}

}