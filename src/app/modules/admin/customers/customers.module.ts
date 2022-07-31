import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomersComponent} from './customers.component';
import {RouterModule} from '@angular/router';
import {customersRoutes} from './customers.routing';


@NgModule({
    declarations: [
        CustomersComponent
    ],
    imports: [
        RouterModule.forChild(customersRoutes),
        CommonModule
    ]
})
export class CustomersModule {
}
