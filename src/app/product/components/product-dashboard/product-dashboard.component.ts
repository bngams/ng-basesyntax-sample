import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { filter } from 'rxjs/operators';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent implements OnInit {

  productService: ProductService;
  productsData: Product[];

  constructor(ps: ProductService) {
    this.productService = ps;
  }

  ngOnInit(): void {
    console.log(this.productService.title);
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts()
      .then((data) => this.productsData = data)
      .catch((err) => console.log(err));
  }

  loadProductsWithObservable() {
    // Observer
    const observer = {
      next: (res) => { console.log(res); },
      error: (err) => { console.log(err); },
      complete: () => { console.log('completed'); }
    };

    // Observable
    const request = this.productService.getProductsWithObservable();
    // request.pipe(
    //   map(),
    //   filter(p => p.price > 5)
    // );
    // subscribe with partial observer
    request.subscribe((res) => console.log(res));
  }

}
