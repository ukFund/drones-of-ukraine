import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: "app",
    },
})
export class AppComponent implements OnInit {
    public isUpper: boolean = true;

    @HostListener("window:scroll")
    onScroll(): void {
        this.isUpper = window.scrollY === 0;
    }

    public ngOnInit(): void {
        this.isUpper = window.scrollY === 0;
    }

    public onActivate($event: any): void {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
}
