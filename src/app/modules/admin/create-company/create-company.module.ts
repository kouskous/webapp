import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCompanyComponent} from './create-company.component';
import {RouterModule} from '@angular/router';
import {createCompanyRoutes} from './create-company.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
    declarations: [
        CreateCompanyComponent
    ],
    imports: [
        RouterModule.forChild(createCompanyRoutes),
        CommonModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule
    ]
})
export class CreateCompanyModule {
}
