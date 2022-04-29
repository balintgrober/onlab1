import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Appointment } from '../models/appointment';
import { CompanyDashboardData } from '../models/CompanyDashboardData';
import { Mail } from '../models/mail';
import { User } from '../models/user';
import { AppointmentService } from '../services/appointment.service';
import { MailService } from '../services/mail.service';
import { StateService } from '../services/state.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  displayedColumns: string[] = ['First name', 'Last name', 'Email', 'Date', 'Actions']
  user: User = new User();
  appointments: Appointment[] = [];
  dataSource: CompanyDashboardData[] = [];
  dashboardData: CompanyDashboardData = new CompanyDashboardData();

  constructor(private appointmentService: AppointmentService, private router: Router, private stateService: StateService, private mailService: MailService) { }

  ngOnInit(): void {
    if(!JSON.parse(localStorage.getItem("reloadedAfterLogin"))){
      localStorage.setItem("reloadedAfterLogin", JSON.stringify(true));
      window.location.reload();
    }
    this.user = JSON.parse(localStorage.getItem("user"));
    this.appointmentService.getAppointments().subscribe((returned_appointments: Appointment[]) => {

      for (let index = 0; index < returned_appointments.length; index++) {
        const element = returned_appointments[index];
        if(element.company.id == this.user.id){
          this.appointments.push(element);
        }
      }
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
      this.dataSource = this.dataSource.sort((a, b) => a.date.getTime() - b.date.getTime());
    });
    
  }

  delete(data: CompanyDashboardData){
    this.appointmentService.deleteAppointment(data.appointment.id).subscribe(() =>{
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

  edit(data: CompanyDashboardData){
    this.stateService.appointmentToEdit = data.appointment;
    this.router.navigate(['/edit']);
  }

}
