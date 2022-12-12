import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomersComponent} from './customers.component';
import {RouterModule} from '@angular/router';
import {customersRoutes} from './customers.routing';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {TranslocoModule} from '@ngneat/transloco';
import {CustomerEditionComponent} from './customer-edition/customer-edition.component';
import {A11yModule} from '@angular/cdk/a11y';


@NgModule({
    declarations: [
        CustomersComponent,
        CustomerEditionComponent
    ],
    imports: [
        RouterModule.forChild(customersRoutes),
        CommonModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatIconModule,
        MatPaginatorModule,
        MatMenuModule,
        MatSortModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        TranslocoModule,
        ReactiveFormsModule,
        A11yModule
    ]
})
export class CustomersModule {
}
