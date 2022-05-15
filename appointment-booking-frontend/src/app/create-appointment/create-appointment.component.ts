import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../models/appointment';
import { Location } from '../models/location';
import { User } from '../models/user';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  company: User = new User();
  date: Date = new Date();
  time: Date = new Date();
  appointment: Appointment = new Appointment();

  location: Location = new Location();

  mapOptions: google.maps.MapOptions = {
    center: { lat: 47.48133557545227, lng: 19.05561282306601 },
    zoom: 14,
    disableDoubleClickZoom: true
  }
 
  place_marker = new google.maps.Marker({
    position: {
      lat: 0,
      lng: 0
    },

  });


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


  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("user"));
  }


  create(){
    this.date.setHours(this.time.getHours());
    this.date.setMinutes(this.time.getMinutes());
    this.date.setSeconds(this.time.getSeconds());
    this.date.setMilliseconds(this.time.getMilliseconds());
    this.appointment.dateTime = this.date.getTime();
    this.appointment.company = this.company;
    this.location.lat = this.place_marker.getPosition().lat();
    this.location.lng = this.place_marker.getPosition().lng();
    this.appointment.location = this.location;
    this.appointmentService.postAppointment(this.appointment).subscribe((_) =>{
      this.router.navigate(['/dashboard']);
    })
  }

  place_marker_on_map(event: google.maps.MapMouseEvent){
    this.place_marker.setPosition(event.latLng);
  }

}
