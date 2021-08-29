import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  public apiUrl = "http://localhost:8080";

  login(body: any) {
    return this.http.post(this.apiUrl + '/api/authenticate', body);
  }
  signup(body: any) {
    return this.http.post(this.apiUrl + '/api/signup', body);
  }
}
