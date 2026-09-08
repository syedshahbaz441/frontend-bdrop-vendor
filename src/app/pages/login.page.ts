import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorApiService } from '../services/vendor-api.service';

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

  constructor(
    private router: Router,
    private vendorApi: VendorApiService
  ) {}

  login() {
    if (!this.email || !this.password) return;

    this.vendorApi.login({ email: this.email, password: this.password }).subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: () => this.router.navigateByUrl('/dashboard')
    });
  }
}
