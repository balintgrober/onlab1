import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  appointmentToEdit: Appointment = new Appointment();
  reloadedAfterLogin: boolean = false;
  locationToShow: Location = new Location();

  constructor() { }
}
