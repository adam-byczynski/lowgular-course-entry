import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeListComponentModule} from "./ui/employee-list/employee-list.component-module";
import {EmployeeDataServiceModule} from "./services/employee-data.service-module";
import {PageHeaderComponentModule} from "./ui/page-header/page-header.component-module";
import {NewEmployeeFormComponentModule} from "./ui/new-employee-form/new-employee-form.component-module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeeDataServiceModule,
    PageHeaderComponentModule,
    NewEmployeeFormComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
