import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import {
  EmployeeImagesLowBarComponentModule
} from "./ui/employee-images-low-bar/employee-images-low-bar.component-module";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {ProjectsServiceModule} from "./services/projects.service-module";
import {ProjectsListComponentModule} from "./ui/projects-list/projects-list.component-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeeImagesLowBarComponentModule,
    EmployeeServiceModule,
    ProjectsListComponentModule,
    ProjectsServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
