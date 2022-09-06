import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/products/product';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private readonly httpClient: HttpClient) {
    }

    add(product: Product): Observable<Product> {
        return this.httpClient.post<Product>(`${environment.backendUrl}/product`, product);
    }

    update(product: Product): Observable<Product> {
        return this.httpClient.put<Product>(`${environment.backendUrl}/product`, product);
    }

    delete(product: Product): Observable<any> {
        return this.httpClient.delete(`${environment.backendUrl}/product/${product.id}`);
    }

    getAll(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(`${environment.backendUrl}/products?companyId=556939fe-7dbc-4acd-9a9d-083e21a594ba`);
    }
}
