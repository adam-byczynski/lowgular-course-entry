import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent {
  constructor(private _client: HttpClient) {}
  pageTitle: string = 'List of employees'
}

