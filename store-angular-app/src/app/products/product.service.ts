import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsModule } from './products.module';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductsModule[]> {
    return this.http.get<ProductsModule[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<ProductsModule> {
    return this.http.get<ProductsModule>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: ProductsModule): Observable<ProductsModule> {
    return this.http.post<ProductsModule>(this.apiUrl, product);
  }

  updateProduct(id: number, product: ProductsModule): Observable<ProductsModule> {
    return this.http.put<ProductsModule>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}