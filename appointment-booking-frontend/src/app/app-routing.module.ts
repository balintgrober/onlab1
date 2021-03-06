import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { RegisterComponent } from './register/register.component';
import { ShowLocationComponent } from './show-location/show-location.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'new-appointment', component: NewAppointmentComponent},
  { path: 'create', component: CreateAppointmentComponent },
  { path: 'client-dashboard', component: ClientDashboardComponent },
  { path: 'edit', component: EditAppointmentComponent },
  { path: 'show-location', component: ShowLocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
