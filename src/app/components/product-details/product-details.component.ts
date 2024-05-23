import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Category } from '../../types';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: any = {};

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.apiService.getCategories().subscribe((data: any) => {
      console.log(data);
      this.categories = data;
    });
  }

  categories: Category[] = [];

  onSubmit() {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
    });
  }
}
