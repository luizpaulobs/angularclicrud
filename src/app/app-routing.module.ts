import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth-guard';
import { LoginComponent } from './auth/login/login.component';
import { GeneralTableComponent } from './components/general-table/general-table.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LuizTableComponent } from './components/luiz-table/luiz-table.component';
import { RobTableComponent } from './components/rob-table/rob-table.component';

const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{
		path: '', 
		component: LayoutComponent, 
		// canActivate: [AuthGuard],
		children: [
			{path: '', redirectTo: '/', pathMatch: 'full'},
			{path: '', component: GeneralTableComponent},
			{path: 'cursos', component: LuizTableComponent},
			{path: 'inscricao', component: RobTableComponent}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
