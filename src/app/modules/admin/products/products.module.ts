import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';
import {productsRoutes} from './products.routing';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {ProductEditionComponent} from './product-edition/product-edition.component';
import {QuillEditorComponent} from 'ngx-quill';
import {MatMenuModule} from '@angular/material/menu';
import {TranslocoModule} from '@ngneat/transloco';


@NgModule({
    declarations: [
        ProductsComponent,
        ProductEditionComponent
    ],
    imports: [
        RouterModule.forChild(productsRoutes),
        CommonModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        FormsModule,
        QuillEditorComponent,
        MatMenuModule,
        TranslocoModule
    ]
})
export class ProductsModule {
}
