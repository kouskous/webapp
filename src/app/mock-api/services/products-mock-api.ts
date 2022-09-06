import {Injectable} from '@angular/core';
import {FuseMockApiService} from '@fuse/lib/mock-api';
import {activities as activitiesData} from 'app/mock-api/pages/activities/data';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductsMockApi {
    private _activities: any = activitiesData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Activities - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet(`${environment.backendUrl}/products?companyId=556939fe-7dbc-4acd-9a9d-083e21a594ba`)
            .reply(() => [200, [
                {
                    id: 'p1',
                    reference: 'pxx1',
                    name: 'Product One ',
                    description: 'Product One Description',
                    priceExcludingTax: 150,
                    taxRate: 9,
                    allTaxesIncludedPrice: 163.5,
                    companyId: 'comp1',
                    creationDate: new Date(),
                    updateDate: new Date()
                },
                {
                    id: 'p2',
                    reference: 'pxx2',
                    name: 'Product Two ',
                    description: 'Product Two Description',
                    priceExcludingTax: 300,
                    taxRate: 9,
                    allTaxesIncludedPrice: 327,
                    companyId: 'comp1',
                    creationDate: new Date(),
                    updateDate: new Date()
                },
                {
                    id: 'p1',
                    reference: 'pxx1',
                    name: 'Product One ',
                    description: 'Product One Description',
                    priceExcludingTax: 150,
                    taxRate: 9,
                    allTaxesIncludedPrice: 163.5,
                    companyId: 'comp1',
                    creationDate: new Date(),
                    updateDate: new Date()
                },
                {
                    id: 'p1',
                    reference: 'pxx1',
                    name: 'Product One ',
                    description: 'Product One Description',
                    priceExcludingTax: 150,
                    taxRate: 9,
                    allTaxesIncludedPrice: 163.5,
                    companyId: 'comp1',
                    creationDate: new Date(),
                    updateDate: new Date()
                },
                {
                    id: 'p1',
                    reference: 'pxx1',
                    name: 'Product One ',
                    description: 'Product One Description',
                    priceExcludingTax: 150,
                    taxRate: 9,
                    allTaxesIncludedPrice: 163.5,
                    companyId: 'comp1',
                    creationDate: new Date(),
                    updateDate: new Date()
                },
                {
                    id: 'p1',
                    reference: 'pxx1',
                    name: 'Product One ',
                    description: 'Product One Description',
                    priceExcludingTax: 150,
                    taxRate: 9,
                    allTaxesIncludedPrice: 163.5,
                    companyId: 'comp1',
                    creationDate: new Date(),
                    updateDate: new Date()
                },
                {
                    id: 'p1',
                    reference: 'pxx1',
                    name: 'Product One ',
                    description: 'Product One Description',
                    priceExcludingTax: 150,
                    taxRate: 9,
                    allTaxesIncludedPrice: 163.5,
                    companyId: 'comp1',
                    creationDate: new Date(),
                    updateDate: new Date()
                },
                {
                    id: 'p1',
                    reference: 'pxx1',
                    name: 'Product One ',
                    description: 'Product One Description',
                    priceExcludingTax: 150,
                    taxRate: 9,
                    allTaxesIncludedPrice: 163.5,
                    companyId: 'comp1',
                    creationDate: new Date(),
                    updateDate: new Date()
                },
                {
                    id: 'p1',
                    reference: 'pxx1',
                    name: 'Product One ',
                    description: 'Product One Description',
                    priceExcludingTax: 150,
                    taxRate: 9,
                    allTaxesIncludedPrice: 163.5,
                    companyId: 'comp1',
                    creationDate: new Date(),
                    updateDate: new Date()
                },
                {
                    id: 'p1',
                    reference: 'pxx1',
                    name: 'Product One ',
                    description: 'Product One Description',
                    priceExcludingTax: 150,
                    taxRate: 9,
                    allTaxesIncludedPrice: 163.5,
                    companyId: 'comp1',
                    creationDate: new Date(),
                    updateDate: new Date()
                },
                {
                    id: 'p1',
                    reference: 'pxx1',
                    name: 'Product One ',
                    description: 'Product One Description',
                    priceExcludingTax: 150,
                    taxRate: 9,
                    allTaxesIncludedPrice: 163.5,
                    companyId: 'comp1',
                    creationDate: new Date(),
                    updateDate: new Date()
                }

            ]]);
    }
}
