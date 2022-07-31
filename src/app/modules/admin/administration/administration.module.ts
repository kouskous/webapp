import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdministrationComponent} from './administration.component';
import {RouterModule} from '@angular/router';
import {administrationRoutes} from './administration.routing';


@NgModule({
    declarations: [
        AdministrationComponent
    ],
    imports: [
        RouterModule.forChild(administrationRoutes),
        CommonModule
    ]
})
export class AdministrationModule {
}
