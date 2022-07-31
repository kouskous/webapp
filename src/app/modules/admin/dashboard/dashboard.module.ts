import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {dashboardRoutes} from './dashboard.routing';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
      RouterModule.forChild(dashboardRoutes),
    CommonModule
  ]
})
export class DashboardModule { }
