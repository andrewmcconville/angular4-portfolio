import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { PortfolioUIService } from './portfolio-ui.service';
import { WorkService } from './work/work.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'portfolio-root',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
    menuStateOverride: string;
    appMenuOpen: boolean;
 
    constructor(
        private portfolioUIService: PortfolioUIService,
        private workService: WorkService
    ) { }

    ngOnInit(): void {
        this.portfolioUIService.currentAppMenuOpen.subscribe(appMenuOpen => {
            this.appMenuOpen = appMenuOpen;
        });
    }

    closeAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(false);
    }

    toggleMenuStateOverride(menuState): void {
        this.menuStateOverride = menuState;
    }
}
