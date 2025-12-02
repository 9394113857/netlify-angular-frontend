// ----------------------------------------------------------
// LoginService - Flask API Integration (FINAL)
// ----------------------------------------------------------

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // OLD URLS (REFERENCE ONLY)
  // private apiUrl = 'https://pythonfamilyacc.pythonanywhere.com';
  // private apiUrl = 'https://pythonfamilyacc.pythonanywhere.com/api';
  // private apiUrl = 'https://railway-flask-backend-production.up.railway.app';
  // private apiUrl = 'https://railway-flask-backend-production.up.railway.app/api';

  // ACTIVE LOCAL BACKEND (Flask)
  private apiUrl = 'http://localhost:5000/api';


  constructor(private http: HttpClient) {}

  register(
    username: string,
    password: string,
    name?: string,
    email?: string,
    phone?: string,
    address?: string
  ): Observable<any> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const body: any = { username, password };
    if (name) body.name = name;
    if (email) body.email = email;
    if (phone) body.phone = phone;
    if (address) body.address = address;

    return this.http.post(`${this.apiUrl}/register`, body, { headers });
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    return this.http.post(`${this.apiUrl}/login`, body, { headers });
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  setSession(authResult: any): void {
    localStorage.setItem('access_token', authResult.access_token);
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('access_token');

    if (!token) {
      throw new Error('No token found!');
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/profile`, { headers });
  }
}
