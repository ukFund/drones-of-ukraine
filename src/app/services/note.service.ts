import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    public hasCryptoNote: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public hasCardNote: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}