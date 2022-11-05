import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterSolicitudCarComponent } from './Inscriptions/register-solicitud-car/register-solicitud-car.component';
import { PrincipalComponent } from './principal/principal.component';
import { ReportSolicitudCarComponent } from './Reports/report-solicitud-car/report-solicitud-car.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'register-solicitud-car', component: RegisterSolicitudCarComponent},
  {path: 'report-solicitud-car', component: ReportSolicitudCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
