export interface Product {
    id?: string;
    reference?: string;
    name?: string;
    description?: string;
    unit?: string;
    priceExcludingTax?: number;
    taxRate?: number;
    allTaxesIncludedPrice?: number;
    companyId?: string;
    creationDate?: Date;
    updateDate?: Date;
}
