import {Product} from './product';

export interface ProductSearchResult {
    elements: Product[];
    totalElements: number;
    totalPages: number;
}
