import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GoogleMapsModule } from '@angular/google-maps';
import { ShowLocationComponent } from './show-location/show-location.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    NewAppointmentComponent,
    CreateAppointmentComponent,
    ClientDashboardComponent,
    EditAppointmentComponent,
    ShowLocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
