import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../models/appointment';
import { CompanyDashboardData } from '../models/CompanyDashboardData';
import { User } from '../models/user';
import { AppointmentService } from '../services/appointment.service';
import { StateService } from '../services/state.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['First name', 'Last name', 'Email', 'Date', 'Actions']
  user: User = new User();
  appointments: Appointment[] = [];
  dataSource: CompanyDashboardData[] = [];
  dashboardData: CompanyDashboardData = new CompanyDashboardData();

  constructor(private appointmentService: AppointmentService, private router: Router, private stateService: StateService) { }

  ngOnInit(): void {
    if(!JSON.parse(localStorage.getItem("reloadedAfterLogin"))){
      localStorage.setItem("reloadedAfterLogin", JSON.stringify(true));
      window.location.reload();
    }
    this.user = JSON.parse(localStorage.getItem("user"));
    this.appointmentService.getAppointments().subscribe((returned_appointments: Appointment[]) => {
      this.appointments = returned_appointments;

      this.appointments = this.appointments.filter(appointment => appointment.company.id !== this.user.id);
      for (let index = 0; index < this.appointments.length; index++) {
        const element = this.appointments[index];
        if (element.user.id != null) {
          this.dashboardData.firstName = element.user.firstName;
          this.dashboardData.date = new Date(element.dateTime);
          this.dashboardData.lastName = element.user.lastName;
          this.dashboardData.email = element.user.email;
          this.dashboardData.appointment = element;
          this.dataSource.push(this.dashboardData);
          this.dashboardData = new CompanyDashboardData();
        }
        else {
          this.dashboardData.date = new Date(element.dateTime);
          this.dashboardData.appointment = element;
          this.dataSource.push(this.dashboardData);
          this.dashboardData = new CompanyDashboardData();
        }
      }


    });
  }

  delete(data: CompanyDashboardData){
    this.appointmentService.deleteAppointment(data.appointment.id).subscribe((_) =>{
      this.dataSource = this.dataSource.filter((d) => d.appointment.id == data.appointment.id)
    });
    
  }

  edit(data: CompanyDashboardData){
    this.stateService.appointmentToEdit = data.appointment
    this.router.navigate(['/edit']);
  }

}
