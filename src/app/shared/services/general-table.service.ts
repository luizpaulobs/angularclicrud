import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: 'root'
})
export class GeneralTableService {

	constructor(private httpClient: HttpClient) {
	
	}

	get(url: string): Observable<any[]> {  
		return this.httpClient.get<any[]>(`${environment.baseUrl}/${url}`);
	}

}