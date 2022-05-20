import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth-guard';
import { LoginComponent } from './auth/login/login.component';
import { GeneralTableComponent } from './components/general-table/general-table.component';

const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: '', component: GeneralTableComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
