import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  appointmentToEdit: Appointment = new Appointment();
  reloadedAfterLogin: boolean = false;

  constructor() { }
}
