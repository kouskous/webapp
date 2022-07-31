import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvoicesComponent} from './invoices.component';
import {RouterModule} from '@angular/router';
import {invoicesRoutes} from './invoices.routing';


@NgModule({
    declarations: [
        InvoicesComponent
    ],
    imports: [
        RouterModule.forChild(invoicesRoutes),
        CommonModule
    ]
})
export class InvoicesModule {
}
