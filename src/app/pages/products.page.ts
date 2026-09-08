import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.css']
})
export class ProductsPageComponent {}
