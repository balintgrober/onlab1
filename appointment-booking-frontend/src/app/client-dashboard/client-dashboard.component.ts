import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Appointment } from '../models/appointment';
import { ClientDashboardData } from '../models/clientdashboarddata';
import { Mail } from '../models/mail';
import { User } from '../models/user';
import { AppointmentService } from '../services/appointment.service';
import { MailService } from '../services/mail.service';

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


  constructor(private appointmentService: AppointmentService, private mailService: MailService) { }

  ngOnInit(): void {
    if(!JSON.parse(localStorage.getItem("reloadedAfterLogin"))){
      localStorage.setItem("reloadedAfterLogin", JSON.stringify(true));
      window.location.reload();
    }
    this.user = JSON.parse(localStorage.getItem("user"));
    this.appointmentService.getAppointments().subscribe((returned_appointments: Appointment[]) => {
      for (let index = 0; index < returned_appointments.length; index++) {
        const element = returned_appointments[index];
        if(element.user.id == this.user.id){
          this.appointments.push(element);
        }
      }
      for (let index = 0; index < this.appointments.length; index++) {
        const element = this.appointments[index];
        this.dashboardData.companyName = element.company.companyName;
        this.dashboardData.date = new Date(element.dateTime);
        this.dashboardData.appointment = element;
        this.dataSource.push(this.dashboardData);
        this.dashboardData = new ClientDashboardData();
      }
      this.dataSource = this.dataSource.sort((a, b) => a.date.getTime() - b.date.getTime());
      console.log(this.dataSource);
    });
  }

  delete(data: ClientDashboardData){
    data.appointment.user = new User();
    this.appointmentService.putAppointment(data.appointment).subscribe(() =>{
      this.dataSource = this.dataSource.filter((d) => d.appointment.id != data.appointment.id)
      if(data.appointment.user.id != null){
        let mailData = new Mail();
        mailData.companyName = data.appointment.company.companyName;
        mailData.timestamp = data.appointment.dateTime;
        mailData.to = environment.email_to;
        mailData.userName = data.appointment.user.firstName;
        this.mailService.sendDeletedemail(mailData).subscribe();
      }
      
    });
  }

}
