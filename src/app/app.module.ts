import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guard/auth-guard';
import { AuthService } from './auth/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertsComponent } from './shared/alerts/alerts.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { GeneralTableComponent } from './components/general-table/general-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    GeneralTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		AuthModule,
    BrowserAnimationsModule,
		AuthModule,
		AlertModule.forRoot(),
		ModalModule.forRoot() 
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
