import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-analytics-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.css']
})
export class AnalyticsPageComponent {}
