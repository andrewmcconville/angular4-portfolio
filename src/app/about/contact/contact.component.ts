import { Component, OnInit } from '@angular/core';
import { PortfolioUIService } from '../../portfolio-ui.service';

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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
