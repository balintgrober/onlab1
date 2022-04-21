import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User>{
    let authUrl = environment.apiBaseUrl + "/auth/register";
    return this.http.post<User>(authUrl, user).pipe(catchError(this.handleError));
  }


  loginUser(user: User): Observable<User>{
    let authUrl = environment.apiBaseUrl + "/auth/login";
    return this.http.post<User>(authUrl, user).pipe(catchError(this.handleError));
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
