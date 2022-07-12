import { Injectable } from "@angular/core";
import { Observable, take } from "rxjs";
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

	post(url: string, obj: any) {
		return this.httpClient.post(`${environment.baseUrl}/${url}`, obj).pipe(take(1));
	}

	put(url: string, obj: any) {
		return this.httpClient.put(`${environment.baseUrl}/${url}`, obj).pipe(take(1));
	}

	delete(url: string, id: number) {
		return this.httpClient.delete(`${environment.baseUrl}/${url}/${id}`);
	}

}