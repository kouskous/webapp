import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../core/user/user.service';
import {User} from '../../../core/user/user.types';
import {Company} from '../../../shared/models/administration/company';
import {CompanyService} from '../../../shared/services/company.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-company',
    templateUrl: './create-company.component.html',
    styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
    formGroup: UntypedFormGroup;
    user: User;

    constructor(private formBuilder: UntypedFormBuilder,
                private userService: UserService,
                private companyService: CompanyService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.initForm();
        this.userService.get().subscribe((user: User) => {
            this.user = user;
        });
    }

    initForm(): void {
        this.formGroup = this.formBuilder.group({
            step1: this.formBuilder.group({
                corporateName: ['', [Validators.required]],
                business: ['', [Validators.required]],
            }),
            step2: this.formBuilder.group({
                email: ['', [Validators.required, Validators.email]],
                phoneNumber: [''],
                faxNumber: [''],
                addressLabel: ['', [Validators.required]],
                addressZipCode: [''],
                addressCity: [''],
                addressCountry: ['algeria'],
            }),
            step3: this.formBuilder.group({
                legalStatus: ['', [Validators.required]],
                capitalStock: [''],
                commercialRegisterNumber: [''],
                statisticalIdentificationNumber: [''],
            })
        });
    }

    finishCreation(): void {
        const company: Company = {
            corporateName: this.formGroup.get('step1').get('corporateName')?.value,
            business: this.formGroup.get('step1').get('business')?.value,
            address: {
                label: this.formGroup.get('step2').get('addressLabel')?.value,
                zipCode: this.formGroup.get('step2').get('addressZipCode')?.value,
                city: this.formGroup.get('step2').get('addressCity')?.value,
                country: this.formGroup.get('step2').get('addressCountry')?.value,
            },
            email: this.formGroup.get('step2').get('email')?.value,
            phoneNumber: this.formGroup.get('step2').get('phoneNumber')?.value,

            legalStatus: this.formGroup.get('step3').get('legalStatus')?.value,
            capitalStock: this.formGroup.get('step3').get('capitalStock')?.value,
            commercialRegisterNumber: this.formGroup.get('step3').get('commercialRegisterNumber')?.value,
            statisticalIdentificationNumber: this.formGroup.get('step3').get('statisticalIdentificationNumber')?.value,
            members: [
                {
                    email: this.user?.email
                }
            ],
        };
        this.companyService.create(company).subscribe((createdCompany) => {
            this.companyService.set(createdCompany);
            this.router.navigate(['/']).then();
        });
    }
}
