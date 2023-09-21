import { Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NoteService } from './services/note.service';
import { Observable } from 'rxjs/internal/Observable';
import { delay, Subscription, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: "app",
    },
})
export class AppComponent implements OnInit, OnDestroy {
    @HostListener("window:scroll")
    onScroll(): void {
        this.isUpper = window.scrollY === 0;
    }

    public hasCryptoNote$!: Observable<boolean>;
    public hasCardNote$!: Observable<boolean>;

    public isUpper: boolean = true;

    private _isScrollToBottom: boolean = false;

    private _cryptoSub: Subscription = Subscription.EMPTY;
    private _cardSub: Subscription = Subscription.EMPTY;

    public constructor(
        private _router: Router,
        private _noteService: NoteService
    ) {
    }

    public ngOnInit(): void {
        this.isUpper = window.scrollY === 0;

        this.hasCryptoNote$ = this._noteService.hasCryptoNote.asObservable();
        this._cryptoSub = this.hasCryptoNote$.pipe(
            delay(1000),
            tap((value) => {
                if (value) {
                    this._noteService.hasCryptoNote.next(false);
                }
            })
        ).subscribe();

        this.hasCardNote$ = this._noteService.hasCardNote.asObservable();
        this._cardSub = this.hasCardNote$.pipe(
            delay(1000),
            tap((value) => {
                if (value) {
                    this._noteService.hasCardNote.next(false);
                }
            })
        ).subscribe();
    }

    public onActivate($event: any): void {
        if (this._isScrollToBottom) {
            window.scroll({
                top: document.body.scrollHeight,
                left: 0,
                behavior: 'smooth'
            });

            this._isScrollToBottom = false;
            return;
        }

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    public scrollToBottom(): void {
        this._isScrollToBottom = true;

        if (this._router.url !== '/home') {
            this._router.navigate(['/homme']);
            return;
        }

        window.scroll({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });

        this._isScrollToBottom = false;
    }

    public ngOnDestroy(): void {
        this._cryptoSub.unsubscribe();
        this._cardSub.unsubscribe();
    }
}
