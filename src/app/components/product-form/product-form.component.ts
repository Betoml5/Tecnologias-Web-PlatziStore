import { Component } from '@angular/core';
import { Category, Product, ProductCreate } from '../../types';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  categories: Category[] = [];

  product: ProductCreate = {
    title: '',
    price: 0,
    description: '',
    categoryId: 0,
    images: [],
  };

  onSubmit() {
    const newProduct = {
      title: this.product.title,
      price: this.product.price,
      description: this.product.description,
      categoryId: this.product.categoryId,
      images: [this.product.images],
    };

    this.apiService.createProduct(newProduct).subscribe((data: any) => {
      this.router.navigate(['/']);
    });
  }

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }
}
