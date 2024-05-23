import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Category, Product } from '../../types';

interface ProductDetails {
  title?: string;
  price?: number;
  description?: string;
  category?: {
    id: number;
    name: string;
  };
  images?: string[];
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: {
      id: 0,
      name: '',
      image: '',
    },
    images: [],
  };

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.apiService
      .getProduct(this.route.snapshot.params['id'])
      .subscribe((data: any) => {
        if (!data) this.router.navigate(['/']);
        this.product = data;
      });
    this.apiService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  categories: Category[] = [];

  onSubmit() {
    const updatedProduct = {
      title: this.product.title,
      price: this.product.price,
      description: this.product.description,
      categoryId: this.product.category.id,
      images: [this.product.images],
    };

    this.apiService.updateProduct(this.product.id, this.product).subscribe(
      (data: any) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
    });
  }
}
