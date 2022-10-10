import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        RouterModule
    ],
  declarations: [HomePageComponent],
  providers: [],
  exports: [HomePageComponent]
})
export class HomePageComponentModule {
}
