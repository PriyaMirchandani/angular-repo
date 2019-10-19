import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProducts():Observable<Product[]> {
    /* return this.http.get<Product[]>('../assets/data/product.json'); */
    return this.http.get<Product[]>('http://localhost:8080/products');
  }
  addProducts(product:Product):Observable<Product>
  {
    return this.http.post<Product>('http://localhost:8080/products/add',product);
  }
}
