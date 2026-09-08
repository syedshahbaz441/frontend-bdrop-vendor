import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login.page';
import { DashboardPageComponent } from './pages/dashboard.page';
import { ProductsPageComponent } from './pages/products.page';
import { OrdersPageComponent } from './pages/orders.page';
import { AnalyticsPageComponent } from './pages/analytics.page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'orders', component: OrdersPageComponent },
  { path: 'analytics', component: AnalyticsPageComponent },
  { path: '**', redirectTo: 'login' }
];
