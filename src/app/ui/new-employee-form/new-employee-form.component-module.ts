import { NgModule } from '@angular/core';
import { NewEmployeeFormComponent } from './new-employee-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        ReactiveFormsModule
    ],
  declarations: [NewEmployeeFormComponent],
  providers: [],
  exports: [NewEmployeeFormComponent]
})
export class NewEmployeeFormComponentModule {
}
