import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../models/customers/customer';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {CustomerSearchResult} from '../models/customers/customer-search-result';
import {SortDirectionEnum} from '../models/common/sort-direction-enum';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(private readonly httpClient: HttpClient) {
    }

    create(customer: Customer): Observable<Customer> {
        return this.httpClient.post<Customer>(`${environment.backendUrl}/customer-management/customer`, customer);
    }

    update(customer: Customer): Observable<Customer> {
        return this.httpClient.put<Customer>(`${environment.backendUrl}/customer-management/customer`, customer);
    }

    delete(customer: Customer): Observable<any> {
        return this.httpClient.delete(`${environment.backendUrl}/customer-management/customer/${customer.id}`);
    }

    getAll(companyId: string, keyword: string, page: number, size: number, sortProperty: string, sortDirection: SortDirectionEnum): Observable<CustomerSearchResult> {
        return this.httpClient.get<CustomerSearchResult>(
            `${environment.backendUrl}/customer-management/customers/search?companyId=${companyId}&keyword=${encodeURI(keyword)}&page=${page}&size=${size}&sortProperty=${sortProperty}&sortDirection=${sortDirection}`);
    }
}
