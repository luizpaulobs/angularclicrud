import { Injectable } from '@angular/core';

export enum USUARIO {
	user = "admin",
	password = "123456"
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private usuarioAutenticado: boolean = false;

  constructor() { }

	public login(value: any): Promise<any> {
		
		const promise = new Promise((resolve, reject) => {
			if(value.user === USUARIO.user && value.password === USUARIO.password) {
				this.usuarioAutenticado = true
				resolve(true);
			} else {
				this.usuarioAutenticado = false;
				reject(false);
			}
		})

		return promise;
	}

	public autenticacao = () => this.usuarioAutenticado; 
}
