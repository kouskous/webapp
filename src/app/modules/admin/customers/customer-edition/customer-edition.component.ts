import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import {Customer} from '../../../../shared/models/customers/customer';
import {Company} from '../../../../shared/models/administration/company';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../../../../shared/services/customer.service';
import {CompanyService} from '../../../../shared/services/company.service';

@Component({
    selector: 'app-customer-edition',
    templateUrl: './customer-edition.component.html',
    styleUrls: ['./customer-edition.component.scss']
})
export class CustomerEditionComponent implements OnInit {
    formGroup: UntypedFormGroup;
    customer: Customer;
    company: Company;
    isProfessional = false;

    constructor(
        public matDialogRef: MatDialogRef<CustomerEditionComponent>,
        private formBuilder: UntypedFormBuilder,
        private customerService: CustomerService,
        private companyService: CompanyService,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }

    ngOnInit(): void {
        this.customer = this.data?.customer;
        this.formGroup = this.formBuilder.group({
            corporateName: [this.customer?.corporateName],
            firstname: [this.customer?.firstname],
            lastname: [this.customer?.lastname],
            email: [this.customer?.email],
            phoneNumber: [this.customer?.phoneNumber],
            faxNumber: [this.customer?.faxNumber],
            addressLabel: [this.customer?.address?.label],
            addressZipCode: [this.customer?.address?.zipCode],
            addressCity: [this.customer?.address?.city],
            addressCountry: [this.customer?.address?.country],
            legalStatus: [this.customer?.legalStatus],
            business: [this.customer?.business],
            commercialRegisterNumber: [this.customer?.commercialRegisterNumber],
            statisticalIdentificationNumber: [this.customer?.statisticalIdentificationNumber],
        });

        this.companyService.get().subscribe((company: Company) => {
            this.company = company;
        });
    }

    cancel(): void {
        this.matDialogRef.close();
    }

    save(): void {
        const customer = {
            id: this.customer?.id,
            companyId: this.company?.id,
            corporateName: this.formGroup.get('corporateName')?.value,
            firstname: this.formGroup.get('firstname')?.value,
            lastname: this.formGroup.get('lastname')?.value,
            email: this.formGroup.get('email')?.value,
            phoneNumber: this.formGroup.get('phoneNumber')?.value,
            faxNumber: this.formGroup.get('faxNumber')?.value,
            address: {
                label: this.formGroup.get('addressLabel')?.value,
                zipCode: this.formGroup.get('addressZipCode')?.value,
                city: this.formGroup.get('addressCity')?.value,
                country: this.formGroup.get('addressCountry')?.value
            },
            legalStatus: this.formGroup.get('legalStatus')?.value,
            business: this.formGroup.get('business')?.value,
            commercialRegisterNumber: this.formGroup.get('commercialRegisterNumber')?.value,
            statisticalIdentificationNumber: this.formGroup.get('statisticalIdentificationNumber')?.value
        };
        if (customer.id) {
            this.customerService.update(customer).subscribe({
                next: (updatedCustomer: Customer) => {
                    this.matDialogRef.close(updatedCustomer);
                },
                error: () => {
                }
            });
        } else {
            this.customerService.create(customer).subscribe({
                next: (createdCustomer: Customer) => {
                    this.matDialogRef.close(createdCustomer);
                },
                error: () => {
                }
            });
        }
    }

    switchIsProfessional(): void {
        this.isProfessional = !this.isProfessional;
        if (this.isProfessional) {
            this.formGroup.get('firstname')?.setValue(null);
            this.formGroup.get('lastname')?.setValue(null);
        } else {
            this.formGroup.get('companyName')?.setValue(null);
            this.formGroup.get('legalStatus')?.setValue(null);
            this.formGroup.get('business')?.setValue(null);
            this.formGroup.get('commercialRegisterNumber')?.setValue(null);
            this.formGroup.get('statisticalIdentificationNumber')?.setValue(null);
        }
    }
}
