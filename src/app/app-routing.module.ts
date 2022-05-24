import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth-guard';
import { LoginComponent } from './auth/login/login.component';
import { GeneralTableComponent } from './components/general-table/general-table.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{
		path: '', 
		component: LayoutComponent, 
		canActivate: [AuthGuard],
		children: [
			{path: '', redirectTo: '/home', pathMatch: 'full'},
			{path: 'home', component: GeneralTableComponent}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
