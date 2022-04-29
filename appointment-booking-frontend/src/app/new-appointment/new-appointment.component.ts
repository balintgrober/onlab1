import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Appointment } from '../models/appointment';
import { Mail } from '../models/mail';
import { User } from '../models/user';
import { AppointmentService } from '../services/appointment.service';
import { MailService } from '../services/mail.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  user: User = new User();
  companies: User[] = [];
  companyid: string = "";
  dates: string[] = [];
  appointments: Appointment[] = [];
  picked_date: string = "";

  constructor(private userService: UserService, private appointmentService: AppointmentService, private router: Router, private mailService: MailService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.userService.getUsers().subscribe((users) => {
      this.companies = users.filter((user) => user.role == 'Company');
    });
  }

  updateList(){
    this.appointmentService.getAppointments().subscribe((returned_appointments) => {
      returned_appointments = returned_appointments.sort((a, b) => a.dateTime - b.dateTime);
      this.appointments = returned_appointments.filter((appointment) => appointment.company.id == this.companyid && appointment.user.id == null);
      for (let index = 0; index < this.appointments.length; index++) {
        const element = this.appointments[index];
        this.dates.push(new Date(element.dateTime).toLocaleString())
      }
    });
    
  }

  book(){
    console.log(this.companyid);
    console.log(this.picked_date[0]);
    let picked_appointment = this.appointments.filter((appointment) => new Date(appointment.dateTime).toLocaleString() == this.picked_date[0]);
    picked_appointment[0].user = this.user;
    console.log(picked_appointment);
    this.appointmentService.putAppointment(picked_appointment[0]).subscribe(()=> {
      let mailData = new Mail();
      mailData.to = environment.email_to;
      mailData.companyName = picked_appointment[0].company.companyName;
      mailData.timestamp = picked_appointment[0].dateTime;
      mailData.userName = this.user.firstName;
      this.mailService.sendCreatedEmail(mailData).subscribe(() => {
        this.router.navigate(['/client-dashboard']);
      });
      
    });
  }

}
