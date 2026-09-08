import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css']
})
export class DashboardPageComponent {}
