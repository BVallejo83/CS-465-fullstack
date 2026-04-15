import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router,
    private tripData: TripData
  ) {}

  onLogin(): void {
    const user = {
      email: this.email,
      password: this.password
    };
    
    this.tripData.login(user).subscribe({
      next: (response: any) => {
       console.log('Login response:', response);

       if (response && response.token) {
        this.tripData.saveToken(response.token);
        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['/trips']);
      } else {
        console.error('Token missing from login response', response);
        alert('Login failed: token missing');
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid login');
      }
    });
  }
}
