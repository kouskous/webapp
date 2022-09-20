import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product, TaxTypeEnum} from '../../../../shared/models/products/product';
import {ProductService} from '../../../../shared/services/product.service';
import {Company} from '../../../../shared/models/administration/company';
import {CompanyService} from '../../../../shared/services/company.service';

@Component({
    selector: 'app-product-edition',
    templateUrl: './product-edition.component.html',
    styleUrls: ['./product-edition.component.scss']
})
export class ProductEditionComponent implements OnInit {
    formGroup: UntypedFormGroup;
    product: Product;
    company: Company;

    constructor(
        public matDialogRef: MatDialogRef<ProductEditionComponent>,
        private formBuilder: UntypedFormBuilder,
        private productService: ProductService,
        private companyService: CompanyService,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }

    ngOnInit(): void {
        this.product = this.data?.product;
        this.formGroup = this.formBuilder.group({
            reference: [this.product?.reference],
            name: [this.product?.name, [Validators.required]],
            description: [this.product?.description],
            unit: [this.product?.unit],
            unitPrice: [this.product?.unitPrice, [Validators.required]],
            valueAddedTax: [this.product?.valueAddedTax?.value ? this.product?.valueAddedTax?.value : 9, [Validators.required]],
        });

        this.companyService.get().subscribe((company: Company) => {
            this.company = company;
        });
    }

    cancel(): void {
        this.matDialogRef.close();
    }

    save(): void {
        const product = {
            id: this.product?.id,
            companyId: this.company?.id,
            name: this.formGroup.get('name')?.value,
            description: this.formGroup.get('description')?.value,
            reference: this.formGroup.get('reference')?.value,
            unitPrice: this.formGroup.get('unitPrice')?.value,
            unit: this.formGroup.get('unit')?.value,
            valueAddedTax: {
                value: this.formGroup.get('valueAddedTax')?.value,
                type: TaxTypeEnum.rate,
                name: 'Value Added Tax'
            },
            otherTaxes: []
        };
        this.productService.create(product).subscribe({
            next: (createdProduct: Product) => {
                this.matDialogRef.close(createdProduct);
            },
            error: () => {
            }
        });
    }
}
