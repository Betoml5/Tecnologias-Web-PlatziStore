import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductCreate } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('https://api.escuelajs.co/api/v1/products');
  }

  getProduct(id: string) {
    return this.http.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  }

  getCategories() {
    return this.http.get('https://api.escuelajs.co/api/v1/categories');
  }

  createProduct(product: any) {
    return this.http.post('https://api.escuelajs.co/api/v1/products', product);
  }
}
