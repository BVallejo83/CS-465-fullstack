import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.username === 'admin' && this.password === 'password') {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/trips']);
    } else {
      alert('Invalid login');
    }
  }
}
