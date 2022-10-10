import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { NewEmployeeFormComponent } from './ui/new-employee-form/new-employee-form.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeeDataServiceModule } from './services/employee-data.service-module';
import { NewEmployeeFormComponentModule } from './ui/new-employee-form/new-employee-form.component-module';
import { HomePageComponentModule } from './ui/home-page/home-page.component-module';

const routes: Routes = [
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'create-employee', component: NewEmployeeFormComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeListComponentModule, EmployeeDataServiceModule, NewEmployeeFormComponentModule, HomePageComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
