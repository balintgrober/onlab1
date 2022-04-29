import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Appointment } from '../models/appointment';
import { Mail } from '../models/mail';
import { AppointmentService } from '../services/appointment.service';
import { MailService } from '../services/mail.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  appointmentToEdit: Appointment;
  oldDate:string = "";
  newDate: Date = new Date();
  newTime: Date = new Date();
  newAppointment: Appointment = new Appointment();
  mailData: Mail = new Mail();

  times: any[] = [
    {value: new Date(0,0,0,0,0,0,0), viewValue: '0:00'},
    {value: new Date(0,0,0,0,30,0,0), viewValue: '0:30'},
    {value: new Date(0,0,0,1,0,0,0), viewValue: '1:00'},
    {value: new Date(0,0,0,1,30,0,0), viewValue: '1:30'},
    {value: new Date(0,0,0,2,0,0,0), viewValue: '2:00'},
    {value: new Date(0,0,0,2,30,0,0), viewValue: '2:30'},
    {value: new Date(0,0,0,3,0,0,0), viewValue: '3:00'},
    {value: new Date(0,0,0,3,30,0,0), viewValue: '3:30'},
    {value: new Date(0,0,0,4,0,0,0), viewValue: '4:00'},
    {value: new Date(0,0,0,4,30,0,0), viewValue: '4:30'},
    {value: new Date(0,0,0,5,0,0,0), viewValue: '5:00'},
    {value: new Date(0,0,0,5,30,0,0), viewValue: '5:30'},
    {value: new Date(0,0,0,6,0,0,0), viewValue: '6:00'},
    {value: new Date(0,0,0,6,30,0,0), viewValue: '6:30'},
    {value: new Date(0,0,0,7,30,0,0), viewValue: '7:00'},
    {value: new Date(0,0,0,7,30,0,0), viewValue: '7:30'},
    {value: new Date(0,0,0,8,0,0,0), viewValue: '8:00'},
    {value: new Date(0,0,0,8,30,0,0), viewValue: '8:30'},
    {value: new Date(0,0,0,9,0,0,0), viewValue: '9:00'},
    {value: new Date(0,0,0,9,30,0,0), viewValue: '9:30'},
    {value: new Date(0,0,0,10,0,0,0), viewValue: '10:00'},
    {value: new Date(0,0,0,10,30,0,0), viewValue: '10:30'},
    {value: new Date(0,0,0,11,0,0,0), viewValue: '11:00'},
    {value: new Date(0,0,0,11,30,0,0), viewValue: '11:30'},
    {value: new Date(0,0,0,12,0,0,0), viewValue: '12:00'},
    {value: new Date(0,0,0,12,30,0,0), viewValue: '12:30'},
    {value: new Date(0,0,0,13,0,0,0), viewValue: '13:00'},
    {value: new Date(0,0,0,13,30,0,0), viewValue: '13:30'},
    {value: new Date(0,0,0,14,0,0,0), viewValue: '14:00'},
    {value: new Date(0,0,0,14,30,0,0), viewValue: '14:30'},
    {value: new Date(0,0,0,15,0,0,0), viewValue: '15:00'},
    {value: new Date(0,0,0,15,30,0,0), viewValue: '15:30'},
    {value: new Date(0,0,0,16,0,0,0), viewValue: '16:00'},
    {value: new Date(0,0,0,16,30,0,0), viewValue: '16:30'},
    {value: new Date(0,0,0,17,0,0,0), viewValue: '17:00'},
    {value: new Date(0,0,0,17,30,0,0), viewValue: '17:30'},
    {value: new Date(0,0,0,18,0,0,0), viewValue: '18:00'},
    {value: new Date(0,0,0,18,30,0,0), viewValue: '18:30'},
    {value: new Date(0,0,0,19,0,0,0), viewValue: '19:00'},
    {value: new Date(0,0,0,19,30,0,0), viewValue: '19:30'},
    {value: new Date(0,0,0,20,0,0,0), viewValue: '20:00'},
    {value: new Date(0,0,0,20,30,0,0), viewValue: '20:30'},
    {value: new Date(0,0,0,21,0,0,0), viewValue: '21:00'},
    {value: new Date(0,0,0,21,30,0,0), viewValue: '21:30'},
    {value: new Date(0,0,0,22,0,0,0), viewValue: '22:00'},
    {value: new Date(0,0,0,22,30,0,0), viewValue: '22:30'},
    {value: new Date(0,0,0,23,0,0,0), viewValue: '23:00'},
    {value: new Date(0,0,0,23,30,0,0), viewValue: '23:30'},
    
  ]

  constructor(private stateService: StateService, private mailService: MailService, private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
    this.appointmentToEdit = this.stateService.appointmentToEdit;
    this.mailData.timestamp = this.appointmentToEdit.dateTime;
    this.newAppointment = this.appointmentToEdit;
    this.oldDate = new Date(this.appointmentToEdit.dateTime).toLocaleString();
  }


  edit(){
    this.newDate.setHours(this.newTime.getHours());
    this.newDate.setMinutes(this.newTime.getMinutes());
    this.newDate.setSeconds(this.newTime.getSeconds());
    this.newDate.setMilliseconds(this.newTime.getMilliseconds());
    this.newAppointment.dateTime = this.newDate.getTime();
    this.appointmentService.putAppointment(this.newAppointment).subscribe(() => {
      if(this.newAppointment.user.id != null){
        this.mailData.companyName = this.newAppointment.company.companyName;
        this.mailData.userName = this.newAppointment.user.firstName;
        this.mailData.to = environment.email_to;
        this.mailData.timeEdited = this.newAppointment.dateTime;
        console.log(this.mailData.timestamp)
        console.log(this.mailData.timeEdited)
        this.mailService.sendEditedEmail(this.mailData).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      }
      else{
        this.router.navigate(['/dashboard']);
      }
    });    
  }

}
