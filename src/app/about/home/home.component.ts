import { Component, OnInit } from '@angular/core';

import { PortfolioUIService } from '../../portfolio-ui.service';
import { WorkService } from '../../work/work.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    scrollbarWidth: number;
    prevURL: string = this.workService.getLastWorkURL();

    constructor(
        private portfolioUIService: PortfolioUIService,
        private workService: WorkService,
    ) { }

    ngOnInit(): void {
        this.scrollbarWidth = this.portfolioUIService.getScrollbarWidth();
    }

    openAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(true);
    }
}
