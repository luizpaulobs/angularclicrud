import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

	public form: FormGroup;
	public modalRef?: BsModalRef;

  constructor(
		private fb: FormBuilder, 
		private authService: AuthService, 
		private modalService: BsModalService,
		private route: Router
		) { 
		this.form = this.fb.group({
			user: new FormControl(undefined),
			password: new FormControl(undefined)
		})
	}

  ngOnInit(): void {
  }

	submit() {
		this.authService.login(this.form.value)
			.then(() => {
				console.log("Acesso Liberado");
				this.route.navigateByUrl("")
			})
			.catch(() => {
				const data = {
					type: "danger",
					message: "Usuário ou Senha incorretos!",
					title: "Login"
				}

				this.modalRef = this.modalService.show(AlertsComponent, {initialState: data});
				this.modalRef.content.closeBtnName = 'Close';

			})
	}

}
