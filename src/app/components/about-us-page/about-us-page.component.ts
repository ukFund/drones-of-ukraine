import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-about-us-page',
    templateUrl: './about-us-page.component.html',
    styleUrls: ['./about-us-page.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'page about-us',
    },
})
export class AboutUsPageComponent {
}
