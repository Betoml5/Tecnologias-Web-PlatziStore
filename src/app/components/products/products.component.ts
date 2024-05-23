import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../types';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getProducts().subscribe((data: any) => {
      console.log(this.products);
      this.products = data;
    });
  }
}
