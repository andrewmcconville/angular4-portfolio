import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { PortfolioUIService } from './portfolio-ui.service';
import { WorkService } from './work/work.service';

declare let ga: Function;

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'portfolio-root',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
    menuStateOverride: string;
    scrollbarWidth: number;
    appMenuOpen: boolean;
    appMenuList: HTMLElement;

    constructor(
        private portfolioUIService: PortfolioUIService,
        public router: Router
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }

    ngOnInit(): void {
        this.portfolioUIService.currentAppMenuOpen.subscribe((appMenuOpen: boolean) => {
            this.appMenuOpen = appMenuOpen;
        });

        this.appMenuList = document.getElementById('app-menu-list');
    }

    closeAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(false);
    }

    toggleMenuStateOverride(menuState): void {
        this.menuStateOverride = menuState;
        this.appMenuList.scrollTop = 0;
    }
}
