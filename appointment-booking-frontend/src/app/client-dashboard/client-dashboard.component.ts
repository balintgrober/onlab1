import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { ClientDashboardData } from '../models/clientdashboarddata';
import { User } from '../models/user';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {


  displayedColumns: string[] = ['Company name', 'Date', 'Actions']
  user: User = new User();
  appointments: Appointment[] = [];
  dataSource: ClientDashboardData[] = [];
  dashboardData: ClientDashboardData = new ClientDashboardData();


  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.appointmentService.getAppointments().subscribe((returned_appointments: Appointment[]) => {
      this.appointments = returned_appointments;

      this.appointments = this.appointments.filter(appointment => appointment.user.id === this.user.id);
      for (let index = 0; index < this.appointments.length; index++) {
        const element = this.appointments[index];
        this.dashboardData.companyName = element.company.companyName;
        this.dashboardData.date = new Date(element.time);
        this.dashboardData.appointment = element;
        this.dataSource.push(this.dashboardData);
      }
    });
  }

  delete(data: ClientDashboardData){

  }

}
