import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-reports-page',
    templateUrl: './reports-page.component.html',
    styleUrls: ['./reports-page.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'page reports',
    },
})
export class ReportsPageComponent {
}
