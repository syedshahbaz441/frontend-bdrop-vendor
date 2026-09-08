import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPageComponent {
  email = 'vendor@freshbite.com';
  password = 'vendor123';

  constructor(private router: Router) {}

  login() {
    if (this.email && this.password) {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
