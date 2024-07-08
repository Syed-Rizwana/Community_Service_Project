import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  login,
  Crud,
  contact,
  FormDetails,
  Inspiration,
  share1,
  UniqueConstraintError,
} from './crud';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CRUDService {
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
    Details: Crud
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Feedback/Insert',
      Details,
      { headers: this.headers }
    );
  }

  Read(email: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Feedback/Read/${email}`);
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
  Insert1(
    Details: FormDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'AR/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read1(Section: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}AR/Read/${Section}`);
  }
  Delete1(Section: String): Observable<InsertedSuccess> {
    console.log(`${this.url}AR/Delete/${Section}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}AR/Delete/${Section}`
    );
  }
  Update1(Section: String, Details: FormDetails) {
    return this.http.put(`${this.url}AR/Update/${Section}`, Details, {
      headers: this.headers,
    });
  }
  Insert2(
    Details: share1
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'share1/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Delete2(email: String): Observable<InsertedSuccess> {
    console.log(`${this.url}share1/Delete/${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}share1/Delete/${email}`
    );
  }
 
  Read2(email: String): Observable<InsertedSuccess> {
    console.log(`${this.url}share1/Read/${email}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}share1/Read/${email}`
    );
  }
  update2(email: String,Details:share1){
    return this.http.put(`${this.url}share1/Update/${email}`,Details,{headers:this.headers}
    );
  }


Insert3(
  Details: contact
): Observable<InsertedSuccess | UniqueConstraintError> {
  return this.http.post<InsertedSuccess | UniqueConstraintError>(
    this.url + 'contact/Insert',
    Details,
    { headers: this.headers }
  );
}
Insert4(
  Details: Inspiration
): Observable<InsertedSuccess | UniqueConstraintError> {
  return this.http.post<InsertedSuccess | UniqueConstraintError>(
    this.url + 'inspiration/Insert',
    Details,
    { headers: this.headers }
  );
}
Read4(name: String): Observable<Read> {
  return this.http.get<Read>(`${this.url}inspiration/Read${name}`);
}
Delete4(name: String): Observable<InsertedSuccess> {
  console.log(`${this.url}inspiration/Delete${name}`);
  return this.http.delete<InsertedSuccess>(
    `${this.url}inspiration/Delete${name}`
  );
}
Update4(name: String, Details: Inspiration) {
  return this.http.put(`${this.url}inspiration/Update${name}`, Details, {
    headers: this.headers,
    });

  }

 
}
