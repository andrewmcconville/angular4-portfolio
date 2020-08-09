import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PortfolioUIService {

    private appMenuOpen = new BehaviorSubject<boolean>(false);
    currentAppMenuOpen = this.appMenuOpen.asObservable();

    constructor() {}

    changeAppMenuOpen(isOpen: boolean) {
        this.appMenuOpen.next(isOpen);
    }
}
