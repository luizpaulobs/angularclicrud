import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [
    LoginComponent
  ],
	imports: [
		CommonModule,
		ReactiveFormsModule,
	]
}) 
export class AuthModule{}