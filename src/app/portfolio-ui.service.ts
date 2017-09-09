import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PortfolioUIService {
    private menuState = new Subject<any>();

    constructor() {
    }

    setMenuState(menuState: string) {
        console.log(menuState);
        this.menuState.next(menuState);
    }

    getMenuState(): Observable<any> {
        return this.menuState.asObservable();
    }
}
