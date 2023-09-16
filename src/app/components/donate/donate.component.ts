import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'donate',
  },
})
export class DonateComponent {}
