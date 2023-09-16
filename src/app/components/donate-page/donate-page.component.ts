import { Component, ViewEncapsulation } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { NoteService } from '../../services/note.service';

@Component({
    selector: 'app-donate-page',
    templateUrl: './donate-page.component.html',
    styleUrls: ['./donate-page.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'page donate',
    },
})
export class DonatePageComponent {
    public usdtTrc20: string = 'TP83S1AAifANsVmWo6LLaEhczjLAeFnCon';
    public usdtErc20: string = '0xCFC81F7CcAeD552f5Cf4A9f858C030aeE8a51060';
    public busdBep20: string = '0xCFC81F7CcAeD552f5Cf4A9f858C030aeE8a51060';
    public btcBtc: string = 'bc1q7njp3cdww7rfyuffmlr8rm2vmln0xunmdq2p5l';
    public ethErc20: string = '0xCFC81F7CcAeD552f5Cf4A9f858C030aeE8a51060';

    public cardNumber: string = '4441 1144 5746 8252';

    constructor(
        private _clipboard: Clipboard,
        private _noteService: NoteService
    ) {
    }

    public copyToClipboard(value: string, isCard: boolean = false): void {
        this._clipboard.copy(value.replace(/ /g, ''));

        if (isCard) {
            this._noteService.hasCardNote.next(true);
            return;
        }

        this._noteService.hasCryptoNote.next(true);
    }
}
