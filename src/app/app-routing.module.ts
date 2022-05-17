import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth-guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: '', component: LoginComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
