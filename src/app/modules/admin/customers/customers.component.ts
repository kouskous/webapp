import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {Company} from '../../../shared/models/administration/company';
import {SortDirectionEnum} from '../../../shared/models/common/sort-direction-enum';
import {CustomerService} from '../../../shared/services/customer.service';
import {CompanyService} from '../../../shared/services/company.service';
import {FuseConfirmationService} from '../../../../@fuse/services/confirmation';
import {TranslocoService} from '@ngneat/transloco';
import {MatDialog} from '@angular/material/dialog';
import {Customer} from '../../../shared/models/customers/customer';
import {CustomerSearchResult} from '../../../shared/models/customers/customer-search-result';
import {CustomerEditionComponent} from './customer-edition/customer-edition.component';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    @ViewChild(MatSort)
    sort!: MatSort;

    isLoading = false;
    company: Company;

    keyword: string = '';
    page: number = 0;
    size: number = 10;
    sortProperty: string = 'corporateName';
    sortDirection: SortDirectionEnum = SortDirectionEnum.asc;

    customerSearchResult: CustomerSearchResult;

    constructor(private readonly customersService: CustomerService,
                private companyService: CompanyService,
                private fuseConfirmationService: FuseConfirmationService,
                private translocoService: TranslocoService,
                private _matDialog: MatDialog) {
    }

    ngOnInit(): void {
        this.companyService.get().subscribe((company: Company) => {
            if (company) {
                this.company = company;
                this.loadCustomers();
            }
        });
    }

    pageChanged(event: PageEvent): void {
        this.page = event.pageIndex;
        this.size = event.pageSize;
        this.loadCustomers();
    }

    loadCustomers(): void {
        this.isLoading = true;
        this.customersService.getAll(this.company?.id, this.keyword, this.page, this.size, this.sortProperty, this.sortDirection)
            .subscribe((result) => {
                this.isLoading = false;
                this.customerSearchResult = result;
            }, () => {
                this.isLoading = false;
            });
    }

    sortChanged(event: Sort): void {
        this.sortProperty = event.active;
        this.sortDirection = SortDirectionEnum[event.direction];
        this.loadCustomers();
    }

    openCustomerEditionModal(customer?: Customer): void {
        const dialogRef = this._matDialog.open(CustomerEditionComponent, {
            data: {customer: customer}
        });
        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.loadCustomers();
                }
            });
    }

    deleteCustomer(customer: Customer): void {
        const dialogRef = this.fuseConfirmationService.open({
            title: this.translocoService.translate('customers.deleteCustomer'),
            message: this.translocoService.translate('customers.deletionConfirmation'),
            icon: {
                show: true,
                name: 'heroicons_outline:exclamation',
                color: 'warn'
            },
            actions: {
                confirm: {
                    show: true,
                    label: this.translocoService.translate('customers.delete'),
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
                this.customersService.delete(customer).subscribe((result) => {
                    this.loadCustomers();
                });
            }
        });
    }

}
