import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../../../shared/models/products/product';
import {ProductsService} from '../../../shared/services/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    isLoading = false;
    products$: Observable<Product[]> = of([{}]);
    searchText: string = '';
    products: Product[] = [];

    constructor(private readonly productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.isLoading = true;
        this.productsService.getAll().subscribe({
            next: (products) => {
                this.isLoading = false;
                this.products = products;
            },
            error: () => {
                this.isLoading = false;
            }
        });
    }

    createProduct(): void {
    }
}
