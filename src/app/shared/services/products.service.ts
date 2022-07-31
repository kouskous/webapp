import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../models/products/product';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    productsSubject = new BehaviorSubject<Product[]>([]);

    constructor(private readonly httpClient: HttpClient) {
    }

    getProductsSubject(): BehaviorSubject<Product[]> {
        this.loadProducts();
        return this.productsSubject;
    }

    addProduct(product: Product): void {
        const products = this.productsSubject.getValue();
        products.unshift(product);
        this.productsSubject.next(products);
        this.httpClient.post<Product>(`${environment.backendUrl}/product`, product)
            .subscribe((createdProduct: Product) => {
                products[0] = createdProduct;
                this.productsSubject.next(products);
            });
    }

    updateProduct(updatedProduct: Product): void {
        const products = this.productsSubject.getValue();
        const index = products.findIndex((product: Product) => product.id === updatedProduct.id);
        products[index] = updatedProduct;
        this.productsSubject.next(products);
        this.httpClient.put<Product>(`${environment.backendUrl}/product`, updatedProduct)
            .subscribe();
    }

    deleteProduct(productToDelete: Product): void {
        const products = this.productsSubject.getValue();
        const index = products.findIndex(product => product.id === productToDelete.id);
        products.splice(index, 1);
        this.productsSubject.next(products);
        this.httpClient.delete(`${environment.backendUrl}/product/${productToDelete.id}`)
            .subscribe();
    }

    private loadProducts(): void {
        console.log('loading products');
        this.httpClient.get<Product[]>(`${environment.backendUrl}/products?companyId=556939fe-7dbc-4acd-9a9d-083e21a594ba`)
            .subscribe((products: Product[]) => {
                console.log(products);
                this.productsSubject.next(products);
            });
    }
}
