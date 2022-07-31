import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EstimatesComponent} from './estimates.component';
import {RouterModule} from '@angular/router';
import {estimatesRoutes} from './estimates.routing';


@NgModule({
    declarations: [
        EstimatesComponent
    ],
    imports: [
        RouterModule.forChild(estimatesRoutes),
        CommonModule
    ]
})
export class EstimatesModule {
}
