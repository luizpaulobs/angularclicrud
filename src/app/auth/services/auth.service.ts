import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private usuarioAutenticado: boolean = false;

  constructor() { }

	public autenticacao = () => this.usuarioAutenticado; 
}
