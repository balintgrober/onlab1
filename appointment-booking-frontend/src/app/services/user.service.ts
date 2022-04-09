import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    let usersUrl = environment.apiBaseUrl + "/users";
    return this.http.get<User[]>(usersUrl).pipe(catchError(this.handleError));
  }

  getUser(id: string): Observable<User>{
    let userUrl = environment.apiBaseUrl + "/users/${id}";
    return this.http.get<User>(userUrl).pipe(catchError(this.handleError));
  }

  deleteUser(id: string): Observable<unknown>{
    let userUrl = environment.apiBaseUrl + "/users/${id}";
    return this.http.delete(userUrl).pipe(catchError(this.handleError));
  }

  putUser(user: User): Observable<User>{
    let userUrl = environment.apiBaseUrl + "/users";
    return this.http.put<User>(userUrl, user).pipe(catchError(this.handleError));
  }

  postUser(user: User): Observable<User>{
    let userUrl = environment.apiBaseUrl + "/users";
    return this.http.post<User>(userUrl, user).pipe(catchError(this.handleError));
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

