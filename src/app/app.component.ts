import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { Product } from './types';
import { ProductsComponent } from './components/products/products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    CommonModule,
    ProductsComponent,
    ProductFormComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive,
  ],
})
export class AppComponent {
  title = 'AngularAppWithApi';

  products: Product[] = [];

  constructor(private ApiService: ApiService) {
    this.ApiService.getProducts().subscribe((data: any) => {
      console.log(data);
      this.products = data.results;
    });
  }
}
