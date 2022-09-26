import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../shared/services/product.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {ProductSearchResult} from '../../../shared/models/products/products-search-result';
import {CompanyService} from '../../../shared/services/company.service';
import {Company} from '../../../shared/models/administration/company';
import {SortDirectionEnum} from '../../../shared/models/products/sort-direction-enum';
import {MatSort, Sort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {ProductEditionComponent} from './product-edition/product-edition.component';
import {Product} from '../../../shared/models/products/product';
import {FuseConfirmationService} from '../../../../@fuse/services/confirmation';
import {TranslocoService} from '@ngneat/transloco';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    @ViewChild(MatSort)
    sort!: MatSort;

    isLoading = false;
    company: Company;

    keyword: string = '';
    page: number = 0;
    size: number = 10;
    sortProperty: string = 'name';
    sortDirection: SortDirectionEnum = SortDirectionEnum.asc;

    productSearchResult: ProductSearchResult;

    constructor(private readonly productsService: ProductService,
                private companyService: CompanyService,
                private fuseConfirmationService: FuseConfirmationService,
                private translocoService: TranslocoService,
                private _matDialog: MatDialog) {
    }

    ngOnInit(): void {
        this.companyService.get().subscribe((company: Company) => {
            if (company) {
                this.company = company;
                this.loadProducts();
            }
        });
    }

    pageChanged(event: PageEvent): void {
        this.page = event.pageIndex;
        this.size = event.pageSize;
        this.loadProducts();
    }

    loadProducts(): void {
        this.isLoading = true;
        this.productsService.getAll(this.company?.id, this.keyword, this.page, this.size, this.sortProperty, this.sortDirection)
            .subscribe((result) => {
                this.isLoading = false;
                this.productSearchResult = result;
            });
    }

    sortChanged(event: Sort): void {
        this.sortProperty = event.active;
        this.sortDirection = SortDirectionEnum[event.direction];
        this.loadProducts();
    }

    openProductEditionModal(product?: Product): void {
        const dialogRef = this._matDialog.open(ProductEditionComponent, {
            data: {product: product}
        });
        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.loadProducts();
                }
            });
    }

    deleteProduct(product: Product): void {
        const dialogRef = this.fuseConfirmationService.open({
            title: this.translocoService.translate('products.deleteProduct'),
            message: this.translocoService.translate('products.deletionConfirmation'),
            icon: {
                show: true,
                name: 'heroicons_outline:exclamation',
                color: 'warn'
            },
            actions: {
                confirm: {
                    show: true,
                    label: this.translocoService.translate('products.delete'),
                    color: 'warn'
                },
                cancel: {
                    show: true,
                    label: 'Cancel'
                }
            },
            dismissible: true
        });
        dialogRef.afterClosed().subscribe((answer) => {
            if (answer === 'confirmed') {
                this.productsService.delete(product).subscribe((result) => {
                    this.loadProducts();
                });
            }
        });
    }
}
