import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  VendorAuthRequest,
  VendorAuthResponse,
  VendorDashboardStats,
  VendorOrder,
  VendorProduct
} from '../models/vendor.models';

@Injectable({ providedIn: 'root' })
export class VendorApiService {
  private readonly baseUrl = '/api/vendor';

  constructor(private http: HttpClient) {}

  login(payload: VendorAuthRequest): Observable<VendorAuthResponse> {
    return this.http.post<VendorAuthResponse>(`${this.baseUrl}/login`, payload);
  }

  getDashboard(): Observable<VendorDashboardStats> {
    return this.http.get<VendorDashboardStats>(`${this.baseUrl}/dashboard`);
  }

  getProducts(): Observable<VendorProduct[]> {
    return this.http.get<VendorProduct[]>(`${this.baseUrl}/products`);
  }

  getOrders(): Observable<VendorOrder[]> {
    return this.http.get<VendorOrder[]>(`${this.baseUrl}/orders`);
  }
}
