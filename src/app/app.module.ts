import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterSolicitudCarComponent } from './Inscriptions/register-solicitud-car/register-solicitud-car.component';
import { ReportSolicitudCarComponent } from './Reports/report-solicitud-car/report-solicitud-car.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterSolicitudCarComponent,
    ReportSolicitudCarComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
