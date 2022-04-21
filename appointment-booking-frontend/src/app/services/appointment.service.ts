import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]>{
    let url = environment.apiBaseUrl + "/appointments";
    return this.http.get<Appointment[]>(url).pipe(catchError(this.handleError));
  }

  getAppointment(id: string): Observable<Appointment>{
    let url = environment.apiBaseUrl + "/appointments/${id}";
    return this.http.get<Appointment>(url).pipe(catchError(this.handleError));
  }

  deleteAppointment(id: string): Observable<Appointment>{
    let url = environment.apiBaseUrl + '/appointments/${id}';
    return this.http.delete<Appointment>(url).pipe(catchError(this.handleError));
  }

  postAppointment(appointment: Appointment): Observable<Appointment>{
    let url = environment.apiBaseUrl + '/appointments';
    return this.http.post<Appointment>(url, appointment).pipe(catchError(this.handleError));
  }

  putAppointment(appointment: Appointment): Observable<Appointment>{
    let url = environment.apiBaseUrl + '/appointments/${id}';
    return this.http.put<Appointment>(url, appointment).pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  

}
