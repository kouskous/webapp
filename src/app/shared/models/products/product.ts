export enum TaxTypeEnum {
    fixed = 'FIXED',
    rate = 'RATE'
}

export interface Tax {
    value?: number;
    type?: TaxTypeEnum;
    name?: string;
}

export interface Product {
    id?: string;
    reference?: string;
    name?: string;
    description?: string;
    unit?: string;
    unitPrice?: number;
    allTaxesIncludedPrice?: number;
    valueAddedTax?: Tax;
    otherTaxes?: Tax[];
    companyId?: string;
    creationDate?: Date;
    updateDate?: Date;
}
