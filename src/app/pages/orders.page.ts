import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.css']
})
export class OrdersPageComponent {}
