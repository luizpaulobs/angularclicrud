import { NgModule, LOCALE_ID } from '@angular/core';
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
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { GeneralTableService } from './shared/services/general-table.service';
import { LuizTableComponent } from './components/luiz-table/luiz-table.component';
import { RobTableComponent } from './components/rob-table/rob-table.component';
import { FormComponent } from './components/luiz-table/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralService } from './components/general-table/service/general.service';
import { LuizService } from './components/luiz-table/service/luiz.service';
import { ReactiveFormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');


@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    GeneralTableComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LuizTableComponent,
    RobTableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		AuthModule,
    BrowserAnimationsModule,
		AuthModule,
		AlertModule.forRoot(),
		ModalModule.forRoot(),
		NgxDatatableModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, GeneralTableService, GeneralService, LuizService, {provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
