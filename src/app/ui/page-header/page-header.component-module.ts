import { NgModule } from '@angular/core';
import { PageHeaderComponent } from './page-header.component';
import {NewEmployeeFormComponentModule} from "../new-employee-form/new-employee-form.component-module";

@NgModule({
    imports: [
        NewEmployeeFormComponentModule
    ],
  declarations: [PageHeaderComponent],
  providers: [],
  exports: [PageHeaderComponent]
})
export class PageHeaderComponentModule {
}
