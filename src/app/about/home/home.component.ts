import { Component, OnInit } from '@angular/core';
import { PortfolioUIService } from '../../portfolio-ui.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    scrollbarWidth: number;

    constructor(
        private portfolioUIService: PortfolioUIService,
    ) { }

    ngOnInit(): void {
        this.scrollbarWidth = this.portfolioUIService.getScrollbarWidth();
    }

    openAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(true);
    }
}
