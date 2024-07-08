import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  Crud,
  login,
  Signup,
  UniqueConstraintError,
} from './crud';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  FoodHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '9d95c08d75mshae57f7f480c131ap1443f3jsn5525ed1bd303',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
  });


  
  private url = 'http://localhost:3000/';

  Insert(
    Details: Signup
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'signup/Insert',
      Details,
      { headers: this.headers }
    );
  }

  Read(email: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}signup/Read/${email}`);
  }
  Delete(email: String): Observable<InsertedSuccess> {
    console.log(`${this.url}Feedback/Delete/${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Feedback/Delete/${email}`
    );
  }
  Update(email: String, Details: Crud) {
    return this.http.put(`${this.url}Feedback/Update/${email}`, Details, {
      headers: this.headers,
    });
  }
  Insert2(
    Details: login
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'login/Insert',
      Details,
      { headers: this.headers }
    );
  }
}

