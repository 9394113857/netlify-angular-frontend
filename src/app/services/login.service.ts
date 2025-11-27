// ----------------------------------------------------------
// LoginService - Handles Login, Register, Logout, Profile API
// ----------------------------------------------------------
// This service communicates with your Flask backend using
// HttpClient. It stores JWT tokens in localStorage and provides
// helper methods for authentication status.
// ----------------------------------------------------------

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Service is available throughout the app
})
export class LoginService {

  // ----------------------------------------------------------
  // Backend API URL
  // Turn ON the env you want (Production / Development)
  // ----------------------------------------------------------

  // Production 1
  // private apiUrl = 'https://pythonfamilyacc.pythonanywhere.com';

  // Production 2 (Railway)
  private apiUrl = 'https://railway-flask-backend-production.up.railway.app';

  // Development (Localhost)
  // private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  // ----------------------------------------------------------
  // User Registration
  // ----------------------------------------------------------
  register(
    username: string,
    password: string,
    name?: string,
    email?: string,
    phone?: string,
    address?: string
  ): Observable<any> {

    // Set request headers
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Create body only with values sent
    const body: any = { username, password };
    if (name) body.name = name;
    if (email) body.email = email;
    if (phone) body.phone = phone;
    if (address) body.address = address;

    // Send request to backend /register
    return this.http.post(`${this.apiUrl}/register`, body, { headers });
  }

  // ----------------------------------------------------------
  // User Login
  // ----------------------------------------------------------
  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    // POST request → /login
    return this.http.post(`${this.apiUrl}/login`, body, { headers });
  }

  // ----------------------------------------------------------
  // Logout → Removes local token
  // ----------------------------------------------------------
  logout(): void {
    localStorage.removeItem('access_token');
  }

  // ----------------------------------------------------------
  // Save Access Token (JWT) in Local Storage
  // ----------------------------------------------------------
  setSession(authResult: any): void {
    localStorage.setItem('access_token', authResult.access_token);
  }

  // ----------------------------------------------------------
  // Check if User Is Logged In
  // ----------------------------------------------------------
  public isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  // ----------------------------------------------------------
  // Fetch Profile (Protected Route)
  // Requires: Authorization: Bearer <token>
  // ----------------------------------------------------------
  getProfile(): Observable<any> {
    const token = localStorage.getItem('access_token');

    if (!token) {
      throw new Error('No token found');
    }

    // Attach token to header
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/profile`, { headers });
  }
}
