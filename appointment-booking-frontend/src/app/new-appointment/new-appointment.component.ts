import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

}
