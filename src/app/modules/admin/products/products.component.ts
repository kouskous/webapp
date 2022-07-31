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
    isLoading: true;
    products$: Observable<Product[]> = of([{}]);

    constructor(private readonly productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.products$ = this.productsService.getProductsSubject();
    }

    createProduct(): void {

    }
}
