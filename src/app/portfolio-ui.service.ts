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

    getScrollbarWidth(): number {
        // create scrolling div
        const outer: HTMLElement = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';
        outer.style.overflow = 'scroll';

        // create scrollbar offset div
        const inner: HTMLElement = document.createElement('div');
        inner.style.width = '100%';

        document.body.appendChild(outer);
        outer.appendChild(inner);

        const scrollbarWidth: number = outer.offsetWidth - inner.offsetWidth;

        outer.parentNode.removeChild(outer);

        return scrollbarWidth;
    }
}
