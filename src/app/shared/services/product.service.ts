import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/products/product';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ProductSearchResult} from '../models/products/products-search-result';
import {SortDirectionEnum} from '../models/products/sort-direction-enum';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private readonly httpClient: HttpClient) {
    }

    create(product: Product): Observable<Product> {
        return this.httpClient.post<Product>(`${environment.backendUrl}/product-management/product`, product);
    }

    update(product: Product): Observable<Product> {
        return this.httpClient.put<Product>(`${environment.backendUrl}/product-management/product`, product);
    }

    delete(product: Product): Observable<any> {
        return this.httpClient.delete(`${environment.backendUrl}/product-management/product/${product.id}`);
    }

    getAll(companyId: string, keyword: string, page: number, size: number, sortProperty: string, sortDirection: SortDirectionEnum): Observable<ProductSearchResult> {
        return this.httpClient.get<ProductSearchResult>(
            `${environment.backendUrl}/product-management/products/search?companyId=${companyId}&keyword=${encodeURI(keyword)}&page=${page}&size=${size}&sortProperty=${sortProperty}&sortDirection=${sortDirection}`);
    }
}
