import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly backendStatus = signal('Checking connection');
  protected readonly backendDetails = signal('Waiting for Spring Boot');

  private readonly http = inject(HttpClient);

  constructor() {
    this.http.get<{ status?: string; service?: string; timestamp?: string }>('/api/health').subscribe({
      next: (response) => {
        const service = response.service ?? 'buddydrop-backend';
        const timestamp = response.timestamp ?? new Date().toISOString();
        this.backendStatus.set('Connected');
        this.backendDetails.set(`${service} heartbeat at ${timestamp}`);
      },
      error: () => {
        this.backendStatus.set('Offline');
        this.backendDetails.set('waiting for buddydrop-backend heartbeat');
      },
    });
  }
}
