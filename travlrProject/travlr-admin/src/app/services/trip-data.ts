import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripData {

  private apiURL = 'http://localhost:3000/api/trips';
  private authURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.authURL}/login`, user);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.authURL}/register`, user);
  }

  saveToken(token: string): void {
    localStorage.setItem('travlr-token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('travlr-token');
  }

// Attach JWT token to protected requests
  private getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  addTrip(trip: any): Observable<any> {
    return this.http.post(this.apiURL, trip, {
      headers: this.getAuthHeaders()
    });
  }

  deleteTrip(tripId: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${tripId}`, {
      headers: this.getAuthHeaders()
    });
  }

  updateTrip(tripId: string, trip: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${tripId}`, trip, {
      headers: this.getAuthHeaders()
    });
  }
}
