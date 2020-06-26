import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly title = 'value';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Promise<Product[]> {
    return this.httpClient.get<Product[]>('https://jsonplaceholder.typicode.com/todos').toPromise();
  }

  getProductsWithObservable(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
