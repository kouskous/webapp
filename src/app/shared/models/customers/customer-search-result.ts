import {Customer} from './customer';

export interface CustomerSearchResult {
    elements: Customer[];
    totalElements: number;
    totalPages: number;
}
