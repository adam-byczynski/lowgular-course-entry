import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import {PageTitleComponentModule} from "./ui/page-title/page-title.component-module";
import {
  EmployeeImagesLowBarComponentModule
} from "./ui/employee-images-low-bar/employee-images-low-bar.component-module";
import {EmployeeServiceModule} from "./services/employee.service-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    PageTitleComponentModule,
    EmployeeImagesLowBarComponentModule,
    EmployeeServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
