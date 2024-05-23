import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../types';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[] = [];

  onDelete(id: number) {
    this.apiService.deleteProduct(id).subscribe((data: any) => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }

  constructor(private apiService: ApiService) {
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }
}
